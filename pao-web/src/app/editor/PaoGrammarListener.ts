import {PaoListener} from "../parser/PaoListener";
import {
  DomainEventDeclarationContext,
  NameDeclarationContext, RuleListContext,
  TypeRuleDeclarationContext
} from "../parser/PaoParser";

export class PaoGrammarListener implements PaoListener {
  systemName: string;

  constructor() {
  }

  enterNameDeclaration(ctx: NameDeclarationContext) {
    this.systemName = ctx.IDENTIFIER().text;
  };

  enterDomainEventDeclaration(ctx: DomainEventDeclarationContext){
    console.log(ctx.IDENTIFIER().text)
  };

  enterRuleList(ctx: RuleListContext) {
    let identifier = ctx.IDENTIFIER();
    identifier.forEach(ident => {
      console.log(ident.text)
    })
  }

  enterTypeRuleDeclaration(ctx: TypeRuleDeclarationContext) {
  };

  getParseResult() {

  }
}