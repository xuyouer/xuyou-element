import * as prettier from 'prettier';

export class PrettierPlugin {
  static getPrettierParser = async (parser?: string): Promise<string> => {
    const choices = await prettier.getSupportInfo().then(result => result.options.find(option => option.name === 'parser')?.choices?.map((choice: any) => choice.value)) || ["acorn", "angular", "babel-flow", "babel-ts", "babel", "css", "espree", "flow", "glimmer", "graphql", "html", "json-stringify", "json", "json5", "jsonc", "less", "lwc", "markdown", "mdx", "meriyah", "scss", "typescript", "vue", "yaml"]
    return parser && choices.includes(parser) ? parser : "markdown"
  }
}

export const {
  getPrettierParser,
} = PrettierPlugin