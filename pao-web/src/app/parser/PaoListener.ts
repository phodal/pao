// Generated from Pao.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CompilationUnitContext } from "./PaoParser";
import { SystemNameDeclarationContext } from "./PaoParser";
import { TypeDeclarationContext } from "./PaoParser";
import { TypeRuleDeclarationContext } from "./PaoParser";
import { NameDeclarationContext } from "./PaoParser";
import { DomainEventDeclarationContext } from "./PaoParser";
import { CommandEventDeclarationContext } from "./PaoParser";
import { ConceptDeclarationContext } from "./PaoParser";
import { CommentTextDeclarationContext } from "./PaoParser";
import { ExtSystemDeclarationContext } from "./PaoParser";
import { SchedulerDeclarationContext } from "./PaoParser";
import { RoleDeclarationContext } from "./PaoParser";
import { EnterRuleDeclarationContext } from "./PaoParser";
import { InputRuleDeclarationContext } from "./PaoParser";
import { FieldDeclarationContext } from "./PaoParser";
import { NewSectionDeclarationContext } from "./PaoParser";
import { RuleListContext } from "./PaoParser";
import { FieldListContext } from "./PaoParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `PaoParser`.
 */
export interface PaoListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PaoParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.systemNameDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSystemNameDeclaration?: (ctx: SystemNameDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.systemNameDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSystemNameDeclaration?: (ctx: SystemNameDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.typeRuleDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeRuleDeclaration?: (ctx: TypeRuleDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.typeRuleDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeRuleDeclaration?: (ctx: TypeRuleDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.nameDeclaration`.
	 * @param ctx the parse tree
	 */
	enterNameDeclaration?: (ctx: NameDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.nameDeclaration`.
	 * @param ctx the parse tree
	 */
	exitNameDeclaration?: (ctx: NameDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.domainEventDeclaration`.
	 * @param ctx the parse tree
	 */
	enterDomainEventDeclaration?: (ctx: DomainEventDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.domainEventDeclaration`.
	 * @param ctx the parse tree
	 */
	exitDomainEventDeclaration?: (ctx: DomainEventDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.commandEventDeclaration`.
	 * @param ctx the parse tree
	 */
	enterCommandEventDeclaration?: (ctx: CommandEventDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.commandEventDeclaration`.
	 * @param ctx the parse tree
	 */
	exitCommandEventDeclaration?: (ctx: CommandEventDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.conceptDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConceptDeclaration?: (ctx: ConceptDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.conceptDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConceptDeclaration?: (ctx: ConceptDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.commentTextDeclaration`.
	 * @param ctx the parse tree
	 */
	enterCommentTextDeclaration?: (ctx: CommentTextDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.commentTextDeclaration`.
	 * @param ctx the parse tree
	 */
	exitCommentTextDeclaration?: (ctx: CommentTextDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.extSystemDeclaration`.
	 * @param ctx the parse tree
	 */
	enterExtSystemDeclaration?: (ctx: ExtSystemDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.extSystemDeclaration`.
	 * @param ctx the parse tree
	 */
	exitExtSystemDeclaration?: (ctx: ExtSystemDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.schedulerDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSchedulerDeclaration?: (ctx: SchedulerDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.schedulerDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSchedulerDeclaration?: (ctx: SchedulerDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.roleDeclaration`.
	 * @param ctx the parse tree
	 */
	enterRoleDeclaration?: (ctx: RoleDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.roleDeclaration`.
	 * @param ctx the parse tree
	 */
	exitRoleDeclaration?: (ctx: RoleDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.enterRuleDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnterRuleDeclaration?: (ctx: EnterRuleDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.enterRuleDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnterRuleDeclaration?: (ctx: EnterRuleDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.inputRuleDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInputRuleDeclaration?: (ctx: InputRuleDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.inputRuleDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInputRuleDeclaration?: (ctx: InputRuleDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.newSectionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterNewSectionDeclaration?: (ctx: NewSectionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.newSectionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitNewSectionDeclaration?: (ctx: NewSectionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.ruleList`.
	 * @param ctx the parse tree
	 */
	enterRuleList?: (ctx: RuleListContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.ruleList`.
	 * @param ctx the parse tree
	 */
	exitRuleList?: (ctx: RuleListContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.fieldList`.
	 * @param ctx the parse tree
	 */
	enterFieldList?: (ctx: FieldListContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.fieldList`.
	 * @param ctx the parse tree
	 */
	exitFieldList?: (ctx: FieldListContext) => void;
}

