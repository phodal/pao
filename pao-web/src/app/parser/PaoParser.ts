// Generated from ../ts/Pao.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { PaoListener } from "./PaoListener";
import { PaoVisitor } from "./PaoVisitor";


export class PaoParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly COLON = 2;
	public static readonly NAME = 3;
	public static readonly DOMAIN_EVENT = 4;
	public static readonly COMMAND = 5;
	public static readonly CARRIER = 6;
	public static readonly ENTER_RULE = 7;
	public static readonly INPUT_RULE = 8;
	public static readonly FIELD = 9;
	public static readonly COMMENT_TEXT = 10;
	public static readonly EXT_SYSTEM = 11;
	public static readonly SCHEDULER = 12;
	public static readonly ROLE = 13;
	public static readonly LBRACK = 14;
	public static readonly RBRACK = 15;
	public static readonly WS = 16;
	public static readonly COMMENT = 17;
	public static readonly LINE_COMMENT = 18;
	public static readonly IDENTIFIER = 19;
	public static readonly RULE_modifier = 0;
	public static readonly RULE_compilationUnit = 1;
	public static readonly RULE_nameDeclaration = 2;
	public static readonly RULE_typeDeclaration = 3;
	public static readonly RULE_typeRuleDeclaration = 4;
	public static readonly RULE_qualifiedName = 5;
	public static readonly RULE_formalParameterList = 6;
	public static readonly RULE_fieldParameters = 7;
	public static readonly RULE_fieldList = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"modifier", "compilationUnit", "nameDeclaration", "typeDeclaration", "typeRuleDeclaration", 
		"qualifiedName", "formalParameterList", "fieldParameters", "fieldList",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", undefined, "'\u540D\u79F0'", "'\u9886\u57DF\u4E8B\u4EF6'", 
		"'\u51B3\u7B56\u547D\u4EE4'", "'\u9886\u57DF\u540D\u8BCD'", "'\u51FA\u89C4\u5219'", 
		"'\u5165\u89C4\u5219'", "'\u5B57\u6BB5'", "'\u6CE8\u91CA'", "'\u5916\u90E8\u7CFB\u7EDF'", 
		"'\u5B9A\u65F6\u4EFB\u52A1'", "'\u89D2\u8272'", "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "COLON", "NAME", "DOMAIN_EVENT", "COMMAND", "CARRIER", 
		"ENTER_RULE", "INPUT_RULE", "FIELD", "COMMENT_TEXT", "EXT_SYSTEM", "SCHEDULER", 
		"ROLE", "LBRACK", "RBRACK", "WS", "COMMENT", "LINE_COMMENT", "IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PaoParser._LITERAL_NAMES, PaoParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PaoParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Pao.g4"; }

	// @Override
	public get ruleNames(): string[] { return PaoParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return PaoParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(PaoParser._ATN, this);
	}
	// @RuleVersion(0)
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, PaoParser.RULE_modifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PaoParser.NAME) | (1 << PaoParser.DOMAIN_EVENT) | (1 << PaoParser.COMMAND) | (1 << PaoParser.CARRIER) | (1 << PaoParser.ENTER_RULE) | (1 << PaoParser.INPUT_RULE) | (1 << PaoParser.COMMENT_TEXT) | (1 << PaoParser.EXT_SYSTEM) | (1 << PaoParser.SCHEDULER) | (1 << PaoParser.ROLE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, PaoParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 20;
			this.nameDeclaration();
			this.state = 24;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PaoParser.NAME) | (1 << PaoParser.DOMAIN_EVENT) | (1 << PaoParser.COMMAND) | (1 << PaoParser.CARRIER) | (1 << PaoParser.ENTER_RULE) | (1 << PaoParser.INPUT_RULE) | (1 << PaoParser.COMMENT_TEXT) | (1 << PaoParser.EXT_SYSTEM) | (1 << PaoParser.SCHEDULER) | (1 << PaoParser.ROLE))) !== 0)) {
				{
				{
				this.state = 21;
				this.typeDeclaration();
				}
				}
				this.state = 26;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 27;
			this.match(PaoParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameDeclaration(): NameDeclarationContext {
		let _localctx: NameDeclarationContext = new NameDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, PaoParser.RULE_nameDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this.modifier();
			this.state = 30;
			this.match(PaoParser.COLON);
			this.state = 31;
			this.match(PaoParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, PaoParser.RULE_typeDeclaration);
		try {
			let _alt: number;
			this.state = 41;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 33;
				this.nameDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 34;
				this.typeRuleDeclaration();
				this.state = 38;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 35;
						this.typeRuleDeclaration();
						}
						}
					}
					this.state = 40;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeRuleDeclaration(): TypeRuleDeclarationContext {
		let _localctx: TypeRuleDeclarationContext = new TypeRuleDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PaoParser.RULE_typeRuleDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this.modifier();
			this.state = 44;
			this.match(PaoParser.COLON);
			this.state = 48;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 45;
				this.match(PaoParser.IDENTIFIER);
				}
				break;

			case 2:
				{
				this.state = 46;
				this.formalParameterList();
				}
				break;

			case 3:
				{
				this.state = 47;
				this.fieldParameters();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PaoParser.RULE_qualifiedName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.match(PaoParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, PaoParser.RULE_formalParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.qualifiedName();
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PaoParser.T__0) {
				{
				{
				this.state = 53;
				this.match(PaoParser.T__0);
				this.state = 54;
				this.qualifiedName();
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldParameters(): FieldParametersContext {
		let _localctx: FieldParametersContext = new FieldParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PaoParser.RULE_fieldParameters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(PaoParser.FIELD);
			this.state = 61;
			this.match(PaoParser.COLON);
			this.state = 62;
			this.fieldList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldList(): FieldListContext {
		let _localctx: FieldListContext = new FieldListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PaoParser.RULE_fieldList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.match(PaoParser.IDENTIFIER);
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PaoParser.T__0) {
				{
				{
				this.state = 65;
				this.match(PaoParser.T__0);
				this.state = 66;
				this.match(PaoParser.IDENTIFIER);
				}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x15K\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x03\x03\x03\x07" +
		"\x03\x19\n\x03\f\x03\x0E\x03\x1C\v\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05\'\n\x05\f\x05\x0E\x05" +
		"*\v\x05\x05\x05,\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		"3\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x07\b:\n\b\f\b\x0E\b=\v\b\x03" +
		"\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x07\nF\n\n\f\n\x0E\nI\v\n\x03\n" +
		"\x02\x02\x02\v\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x02\x03\x04\x02\x05\n\f\x0F\x02H\x02\x14\x03\x02\x02\x02\x04" +
		"\x16\x03\x02\x02\x02\x06\x1F\x03\x02\x02\x02\b+\x03\x02\x02\x02\n-\x03" +
		"\x02\x02\x02\f4\x03\x02\x02\x02\x0E6\x03\x02\x02\x02\x10>\x03\x02\x02" +
		"\x02\x12B\x03\x02\x02\x02\x14\x15\t\x02\x02\x02\x15\x03\x03\x02\x02\x02" +
		"\x16\x1A\x05\x06\x04\x02\x17\x19\x05\b\x05\x02\x18\x17\x03\x02\x02\x02" +
		"\x19\x1C\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1A\x1B\x03\x02\x02\x02" +
		"\x1B\x1D\x03\x02\x02\x02\x1C\x1A\x03\x02\x02\x02\x1D\x1E\x07\x02\x02\x03" +
		"\x1E\x05\x03\x02\x02\x02\x1F \x05\x02\x02\x02 !\x07\x04\x02\x02!\"\x07" +
		"\x15\x02\x02\"\x07\x03\x02\x02\x02#,\x05\x06\x04\x02$(\x05\n\x06\x02%" +
		"\'\x05\n\x06\x02&%\x03\x02\x02\x02\'*\x03\x02\x02\x02(&\x03\x02\x02\x02" +
		"()\x03\x02\x02\x02),\x03\x02\x02\x02*(\x03\x02\x02\x02+#\x03\x02\x02\x02" +
		"+$\x03\x02\x02\x02,\t\x03\x02\x02\x02-.\x05\x02\x02\x02.2\x07\x04\x02" +
		"\x02/3\x07\x15\x02\x0203\x05\x0E\b\x0213\x05\x10\t\x022/\x03\x02\x02\x02" +
		"20\x03\x02\x02\x0221\x03\x02\x02\x023\v\x03\x02\x02\x0245\x07\x15\x02" +
		"\x025\r\x03\x02\x02\x026;\x05\f\x07\x0278\x07\x03\x02\x028:\x05\f\x07" +
		"\x0297\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02" +
		"\x02<\x0F\x03\x02\x02\x02=;\x03\x02\x02\x02>?\x07\v\x02\x02?@\x07\x04" +
		"\x02\x02@A\x05\x12\n\x02A\x11\x03\x02\x02\x02BG\x07\x15\x02\x02CD\x07" +
		"\x03\x02\x02DF\x07\x15\x02\x02EC\x03\x02\x02\x02FI\x03\x02\x02\x02GE\x03" +
		"\x02\x02\x02GH\x03\x02\x02\x02H\x13\x03\x02\x02\x02IG\x03\x02\x02\x02" +
		"\b\x1A(+2;G";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PaoParser.__ATN) {
			PaoParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PaoParser._serializedATN));
		}

		return PaoParser.__ATN;
	}

}

export class ModifierContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(PaoParser.NAME, 0); }
	public DOMAIN_EVENT(): TerminalNode | undefined { return this.tryGetToken(PaoParser.DOMAIN_EVENT, 0); }
	public COMMAND(): TerminalNode | undefined { return this.tryGetToken(PaoParser.COMMAND, 0); }
	public CARRIER(): TerminalNode | undefined { return this.tryGetToken(PaoParser.CARRIER, 0); }
	public ENTER_RULE(): TerminalNode | undefined { return this.tryGetToken(PaoParser.ENTER_RULE, 0); }
	public INPUT_RULE(): TerminalNode | undefined { return this.tryGetToken(PaoParser.INPUT_RULE, 0); }
	public COMMENT_TEXT(): TerminalNode | undefined { return this.tryGetToken(PaoParser.COMMENT_TEXT, 0); }
	public EXT_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(PaoParser.EXT_SYSTEM, 0); }
	public SCHEDULER(): TerminalNode | undefined { return this.tryGetToken(PaoParser.SCHEDULER, 0); }
	public ROLE(): TerminalNode | undefined { return this.tryGetToken(PaoParser.ROLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_modifier; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterModifier) {
			listener.enterModifier(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitModifier) {
			listener.exitModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitModifier) {
			return visitor.visitModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompilationUnitContext extends ParserRuleContext {
	public nameDeclaration(): NameDeclarationContext {
		return this.getRuleContext(0, NameDeclarationContext);
	}
	public EOF(): TerminalNode { return this.getToken(PaoParser.EOF, 0); }
	public typeDeclaration(): TypeDeclarationContext[];
	public typeDeclaration(i: number): TypeDeclarationContext;
	public typeDeclaration(i?: number): TypeDeclarationContext | TypeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDeclarationContext);
		} else {
			return this.getRuleContext(i, TypeDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameDeclarationContext extends ParserRuleContext {
	public modifier(): ModifierContext {
		return this.getRuleContext(0, ModifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(PaoParser.COLON, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(PaoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_nameDeclaration; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterNameDeclaration) {
			listener.enterNameDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitNameDeclaration) {
			listener.exitNameDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitNameDeclaration) {
			return visitor.visitNameDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public nameDeclaration(): NameDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NameDeclarationContext);
	}
	public typeRuleDeclaration(): TypeRuleDeclarationContext[];
	public typeRuleDeclaration(i: number): TypeRuleDeclarationContext;
	public typeRuleDeclaration(i?: number): TypeRuleDeclarationContext | TypeRuleDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeRuleDeclarationContext);
		} else {
			return this.getRuleContext(i, TypeRuleDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeRuleDeclarationContext extends ParserRuleContext {
	public modifier(): ModifierContext {
		return this.getRuleContext(0, ModifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(PaoParser.COLON, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(PaoParser.IDENTIFIER, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public fieldParameters(): FieldParametersContext | undefined {
		return this.tryGetRuleContext(0, FieldParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_typeRuleDeclaration; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterTypeRuleDeclaration) {
			listener.enterTypeRuleDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitTypeRuleDeclaration) {
			listener.exitTypeRuleDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitTypeRuleDeclaration) {
			return visitor.visitTypeRuleDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(PaoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldParametersContext extends ParserRuleContext {
	public FIELD(): TerminalNode { return this.getToken(PaoParser.FIELD, 0); }
	public COLON(): TerminalNode { return this.getToken(PaoParser.COLON, 0); }
	public fieldList(): FieldListContext {
		return this.getRuleContext(0, FieldListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_fieldParameters; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterFieldParameters) {
			listener.enterFieldParameters(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitFieldParameters) {
			listener.exitFieldParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitFieldParameters) {
			return visitor.visitFieldParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldListContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PaoParser.IDENTIFIER);
		} else {
			return this.getToken(PaoParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_fieldList; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterFieldList) {
			listener.enterFieldList(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitFieldList) {
			listener.exitFieldList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitFieldList) {
			return visitor.visitFieldList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


