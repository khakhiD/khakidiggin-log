import { ExtendedRecordMap } from "notion-types"
import { getTextContent, TableOfContentsEntry } from "notion-utils"

const indentLevels = {
  header: 0,
  sub_header: 1,
  sub_sub_header: 2,
}

export const getTableOfContents = (
  recordMap: ExtendedRecordMap
): Array<TableOfContentsEntry> => {
  const toc = Object.keys(recordMap.block)
    .map((blockId: string) => {
      const block = recordMap.block[blockId]?.value

      if (block) {
        const { type } = block

        if (
          type === "header" ||
          type === "sub_header" ||
          type === "sub_sub_header"
        ) {
          return {
            id: blockId,
            type,
            text: getTextContent(block.properties?.title),
            indentLevel: indentLevels[type],
          }
        }
      }

      return null
    })
    .filter(Boolean) as Array<TableOfContentsEntry>

  const indentLevelStack = [
    {
      actual: -1,
      effective: -1,
    },
  ]

  for (const tocItem of toc) {
    const { indentLevel } = tocItem
    const actual = indentLevel

    do {
      const prevIndent = indentLevelStack[indentLevelStack.length - 1]
      const { actual: prevActual, effective: prevEffective } = prevIndent

      if (actual > prevActual) {
        tocItem.indentLevel = prevEffective + 1
        indentLevelStack.push({
          actual,
          effective: tocItem.indentLevel,
        })
      } else if (actual === prevActual) {
        tocItem.indentLevel = prevEffective
        break
      } else {
        indentLevelStack.pop()
      }
    } while (true)
  }

  return toc
}
