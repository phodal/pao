import {PaoListener} from "../parser/PaoListener";
import {NameDeclarationContext} from "../parser/PaoParser";

export class PaoGrammarListener implements PaoListener {
  systemName: string;

  constructor() {
  }

  enterNameDeclaration(ctx: NameDeclarationContext) {
    this.systemName = ctx.IDENTIFIER().text;
  };

  getParseResult() {

  }
}