import {PaoListener} from './PaoListener';
import {
  CommandEventDeclarationContext, CommentTextDeclarationContext,
  CompilationUnitContext, ConceptDeclarationContext,
  DomainEventDeclarationContext, EnterRuleDeclarationContext, ExtSystemDeclarationContext, InputRuleDeclarationContext,
  NewSectionDeclarationContext, RoleDeclarationContext,
  SchedulerDeclarationContext,
  SystemNameDeclarationContext
} from './PaoParser';
import shortid from 'shortid';

export class PaoGrammarListener implements PaoListener {
  paoModel: PaoModel = {name: '', objects: []};
  currentObject: DomainObject;
  finishCallback: () => void;
  allRules: RuleModel[] = [];

  constructor() {
    this.initCurrentObject();
  }

  private initCurrentObject() {
    this.currentObject = {
      eventName: '',
      commandName: '',
      rules: [],
      conceptName: ''
    };
  }

  onFinish(param: () => void) {
    this.finishCallback = param;
  }

  enterSystemNameDeclaration(ctx: SystemNameDeclarationContext) {
    this.paoModel.name = ctx.IDENTIFIER().text;
  }

  enterDomainEventDeclaration(ctx: DomainEventDeclarationContext) {
    this.currentObject.eventName = ctx.IDENTIFIER().text;
  }

  enterCommandEventDeclaration(ctx: CommandEventDeclarationContext) {
    this.currentObject.commandName = ctx.IDENTIFIER().text;
  }

  enterConceptDeclaration(ctx: ConceptDeclarationContext) {
    this.currentObject.conceptName = ctx.IDENTIFIER().text;
  }

  enterCommentTextDeclaration(ctx: CommentTextDeclarationContext) {
    this.currentObject.comment = ctx.IDENTIFIER().text;
  }

  enterExtSystemDeclaration(ctx: ExtSystemDeclarationContext) {
    this.currentObject.externalSystem = ctx.IDENTIFIER().text;
  }

  enterSchedulerDeclaration(ctx: SchedulerDeclarationContext) {
    this.currentObject.scheduler = ctx.IDENTIFIER().text;
  }

  enterRoleDeclaration(ctx: RoleDeclarationContext) {
    this.currentObject.role = ctx.IDENTIFIER().text;
  }

  enterNewSectionDeclaration(ctx: NewSectionDeclarationContext) {
    if (this.currentObject.eventName) {
      this.paoModel.objects = this.paoModel.objects.concat(this.currentObject);
    }
    this.initCurrentObject();
  }

  enterEnterRuleDeclaration(ctx: EnterRuleDeclarationContext) {
    const rules: RuleModel[] = [];
    const ruleListContext = ctx.ruleList();
    const childrens = ruleListContext.IDENTIFIER();

    const parentId = shortid.generate();
    for (const rule of childrens) {
      const id = shortid.generate();
      rules.push({
        parentId,
        id,
        rule: rule.text
      });
    }

    this.allRules = this.allRules.concat(rules);
    this.currentObject.id = parentId;
    this.currentObject.rules = rules;
  }

  enterInputRuleDeclaration(ctx: InputRuleDeclarationContext) {
    const ruleName = ctx.IDENTIFIER().text;
    const parent = this.allRules.filter(rule => ruleName === rule.rule);
    if (parent.length > 0) {
      this.currentObject.ruleId = parent[0].id;
      this.currentObject.parentId = parent[0].parentId;
    }
  }

  exitCompilationUnit(ctx: CompilationUnitContext) {
    if (this.finishCallback) {
      this.finishCallback();
    }
  }

  getParseResult() {
    return this.paoModel;
  }
}
