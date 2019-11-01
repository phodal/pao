import {PaoListener} from "../parser/PaoListener";
import {
  DomainEventDeclarationContext,
  NewLineDeclarationContext,
  NewSectionDeclarationContext,
  RuleListContext,
  SystemNameDeclarationContext,
  TypeRuleDeclarationContext
} from "../parser/PaoParser";

export class PaoGrammarListener implements PaoListener {
  systemName: string;
  paoModel: PaoModel = {name: '', objects: []};

  constructor() {
  }

  enterSystemNameDeclaration(ctx: SystemNameDeclarationContext) {
    this.systemName = ctx.IDENTIFIER().text;
  }

  enterDomainEventDeclaration(ctx: DomainEventDeclarationContext) {
    this.paoModel.name = ctx.IDENTIFIER().text;
  };

  enterRuleList(ctx: RuleListContext) {
    let identifier = ctx.IDENTIFIER();
    identifier.forEach(ident => {
      console.log(ident.text)
    })
  }

  enterNewSectionDeclaration(ctx: NewSectionDeclarationContext) {
    console.log("/......");
  };

  enterTypeRuleDeclaration(ctx: TypeRuleDeclarationContext) {

  };

  getParseResult() {
    return this.paoModel;
  }
}