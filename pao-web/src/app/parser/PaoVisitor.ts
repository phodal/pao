// Generated from Pao.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { CompilationUnitContext } from "./PaoParser";
import { NameDeclarationContext } from "./PaoParser";
import { TypeDeclarationContext } from "./PaoParser";
import { TypeRuleDeclarationContext } from "./PaoParser";
import { DomainEventDeclarationContext } from "./PaoParser";
import { CommadEventDeclarationContext } from "./PaoParser";
import { CarrierDeclarationContext } from "./PaoParser";
import { CommentTextDeclarationContext } from "./PaoParser";
import { ExtSystemDeclarationContext } from "./PaoParser";
import { SchedulerDeclarationContext } from "./PaoParser";
import { RoleDeclarationContext } from "./PaoParser";
import { EnterRuleDeclarationContext } from "./PaoParser";
import { InputRuleDeclarationContext } from "./PaoParser";
import { FieldDeclarationContext } from "./PaoParser";
import { RuleListContext } from "./PaoParser";
import { FieldListContext } from "./PaoParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PaoParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PaoVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PaoParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.nameDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameDeclaration?: (ctx: NameDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.typeRuleDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRuleDeclaration?: (ctx: TypeRuleDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.domainEventDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDomainEventDeclaration?: (ctx: DomainEventDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.commadEventDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommadEventDeclaration?: (ctx: CommadEventDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.carrierDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCarrierDeclaration?: (ctx: CarrierDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.commentTextDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentTextDeclaration?: (ctx: CommentTextDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.extSystemDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtSystemDeclaration?: (ctx: ExtSystemDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.schedulerDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchedulerDeclaration?: (ctx: SchedulerDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.roleDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoleDeclaration?: (ctx: RoleDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.enterRuleDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnterRuleDeclaration?: (ctx: EnterRuleDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.inputRuleDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputRuleDeclaration?: (ctx: InputRuleDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.ruleList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleList?: (ctx: RuleListContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.fieldList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldList?: (ctx: FieldListContext) => Result;
}

