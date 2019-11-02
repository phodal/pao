import {PaoListener} from './PaoListener';
import {
  CommandEventDeclarationContext, CommentTextDeclarationContext,
  CompilationUnitContext, ConceptDeclarationContext,
  DomainEventDeclarationContext, ExtSystemDeclarationContext,
  NewSectionDeclarationContext, RoleDeclarationContext,
  SchedulerDeclarationContext,
  SystemNameDeclarationContext,
  TypeRuleDeclarationContext
} from './PaoParser';

export class PaoGrammarListener implements PaoListener {
  systemName: string;
  paoModel: PaoModel = {name: '', objects: []};
  currentObject: DomainObject;
  finishCallback: () => void;

  constructor() {
    this.initCurrentObject();
  }

  private initCurrentObject() {
    this.currentObject = {
      eventName: '',
      commandName: '',
      rule: [],
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

  enterTypeRuleDeclaration(ctx: TypeRuleDeclarationContext) {

  }

  exitCompilationUnit(ctx: CompilationUnitContext) {
    if (this.finishCallback) {
      this.finishCallback();
    }
  }

  getParseResult() {
    console.log(this.paoModel);
    return this.paoModel;
  }
}
