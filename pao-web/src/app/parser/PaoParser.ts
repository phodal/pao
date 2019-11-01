// Generated from Pao.g4 by ANTLR 4.7.3-SNAPSHOT


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
	public static readonly SYSTEM_NAME = 3;
	public static readonly NAME = 4;
	public static readonly DOMAIN_EVENT = 5;
	public static readonly COMMAND = 6;
	public static readonly CARRIER = 7;
	public static readonly ENTER_RULE = 8;
	public static readonly INPUT_RULE = 9;
	public static readonly FIELD = 10;
	public static readonly COMMENT_TEXT = 11;
	public static readonly EXT_SYSTEM = 12;
	public static readonly SCHEDULER = 13;
	public static readonly ROLE = 14;
	public static readonly LBRACK = 15;
	public static readonly RBRACK = 16;
	public static readonly COMMA = 17;
	public static readonly WS = 18;
	public static readonly COMMENT = 19;
	public static readonly LINE_COMMENT = 20;
	public static readonly IDENTIFIER = 21;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_systemNameDeclaration = 1;
	public static readonly RULE_nameDeclaration = 2;
	public static readonly RULE_typeDeclaration = 3;
	public static readonly RULE_typeRuleDeclaration = 4;
	public static readonly RULE_domainEventDeclaration = 5;
	public static readonly RULE_commadEventDeclaration = 6;
	public static readonly RULE_carrierDeclaration = 7;
	public static readonly RULE_commentTextDeclaration = 8;
	public static readonly RULE_extSystemDeclaration = 9;
	public static readonly RULE_schedulerDeclaration = 10;
	public static readonly RULE_roleDeclaration = 11;
	public static readonly RULE_enterRuleDeclaration = 12;
	public static readonly RULE_inputRuleDeclaration = 13;
	public static readonly RULE_fieldDeclaration = 14;
	public static readonly RULE_ruleList = 15;
	public static readonly RULE_fieldList = 16;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "systemNameDeclaration", "nameDeclaration", "typeDeclaration", 
		"typeRuleDeclaration", "domainEventDeclaration", "commadEventDeclaration", 
		"carrierDeclaration", "commentTextDeclaration", "extSystemDeclaration", 
		"schedulerDeclaration", "roleDeclaration", "enterRuleDeclaration", "inputRuleDeclaration", 
		"fieldDeclaration", "ruleList", "fieldList",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", undefined, "'\u7CFB\u7EDF\u540D\u79F0'", "'\u540D\u79F0'", 
		"'\u9886\u57DF\u4E8B\u4EF6'", "'\u51B3\u7B56\u547D\u4EE4'", "'\u9886\u57DF\u540D\u8BCD'", 
		"'\u51FA\u89C4\u5219'", "'\u5165\u89C4\u5219'", "'\u5B57\u6BB5'", "'\u6CE8\u91CA'", 
		"'\u5916\u90E8\u7CFB\u7EDF'", "'\u5B9A\u65F6\u4EFB\u52A1'", "'\u89D2\u8272'", 
		"'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "COLON", "SYSTEM_NAME", "NAME", "DOMAIN_EVENT", 
		"COMMAND", "CARRIER", "ENTER_RULE", "INPUT_RULE", "FIELD", "COMMENT_TEXT", 
		"EXT_SYSTEM", "SCHEDULER", "ROLE", "LBRACK", "RBRACK", "COMMA", "WS", 
		"COMMENT", "LINE_COMMENT", "IDENTIFIER",
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
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, PaoParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.systemNameDeclaration();
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PaoParser.NAME) | (1 << PaoParser.DOMAIN_EVENT) | (1 << PaoParser.COMMAND) | (1 << PaoParser.CARRIER) | (1 << PaoParser.ENTER_RULE) | (1 << PaoParser.INPUT_RULE) | (1 << PaoParser.FIELD) | (1 << PaoParser.COMMENT_TEXT) | (1 << PaoParser.EXT_SYSTEM) | (1 << PaoParser.SCHEDULER) | (1 << PaoParser.ROLE))) !== 0)) {
				{
				{
				this.state = 35;
				this.typeDeclaration();
				}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 41;
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
	public systemNameDeclaration(): SystemNameDeclarationContext {
		let _localctx: SystemNameDeclarationContext = new SystemNameDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, PaoParser.RULE_systemNameDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this.match(PaoParser.SYSTEM_NAME);
			this.state = 44;
			this.match(PaoParser.COLON);
			this.state = 45;
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
	public nameDeclaration(): NameDeclarationContext {
		let _localctx: NameDeclarationContext = new NameDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, PaoParser.RULE_nameDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this.match(PaoParser.NAME);
			this.state = 48;
			this.match(PaoParser.COLON);
			this.state = 49;
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.typeRuleDeclaration();
			this.state = 55;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 52;
					this.typeRuleDeclaration();
					}
					}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
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
	public typeRuleDeclaration(): TypeRuleDeclarationContext {
		let _localctx: TypeRuleDeclarationContext = new TypeRuleDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PaoParser.RULE_typeRuleDeclaration);
		try {
			this.state = 69;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PaoParser.DOMAIN_EVENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 58;
				this.domainEventDeclaration();
				}
				break;
			case PaoParser.NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 59;
				this.nameDeclaration();
				}
				break;
			case PaoParser.CARRIER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 60;
				this.carrierDeclaration();
				}
				break;
			case PaoParser.COMMAND:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 61;
				this.commadEventDeclaration();
				}
				break;
			case PaoParser.ENTER_RULE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 62;
				this.enterRuleDeclaration();
				}
				break;
			case PaoParser.INPUT_RULE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 63;
				this.inputRuleDeclaration();
				}
				break;
			case PaoParser.COMMENT_TEXT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 64;
				this.commentTextDeclaration();
				}
				break;
			case PaoParser.EXT_SYSTEM:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 65;
				this.extSystemDeclaration();
				}
				break;
			case PaoParser.SCHEDULER:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 66;
				this.schedulerDeclaration();
				}
				break;
			case PaoParser.ROLE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 67;
				this.roleDeclaration();
				}
				break;
			case PaoParser.FIELD:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 68;
				this.fieldDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public domainEventDeclaration(): DomainEventDeclarationContext {
		let _localctx: DomainEventDeclarationContext = new DomainEventDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PaoParser.RULE_domainEventDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(PaoParser.DOMAIN_EVENT);
			this.state = 72;
			this.match(PaoParser.COLON);
			this.state = 73;
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
	public commadEventDeclaration(): CommadEventDeclarationContext {
		let _localctx: CommadEventDeclarationContext = new CommadEventDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, PaoParser.RULE_commadEventDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(PaoParser.COMMAND);
			this.state = 76;
			this.match(PaoParser.COLON);
			this.state = 77;
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
	public carrierDeclaration(): CarrierDeclarationContext {
		let _localctx: CarrierDeclarationContext = new CarrierDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PaoParser.RULE_carrierDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(PaoParser.CARRIER);
			this.state = 80;
			this.match(PaoParser.COLON);
			this.state = 81;
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
	public commentTextDeclaration(): CommentTextDeclarationContext {
		let _localctx: CommentTextDeclarationContext = new CommentTextDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PaoParser.RULE_commentTextDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			this.match(PaoParser.COMMENT_TEXT);
			this.state = 84;
			this.match(PaoParser.COLON);
			this.state = 85;
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
	public extSystemDeclaration(): ExtSystemDeclarationContext {
		let _localctx: ExtSystemDeclarationContext = new ExtSystemDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PaoParser.RULE_extSystemDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(PaoParser.EXT_SYSTEM);
			this.state = 88;
			this.match(PaoParser.COLON);
			this.state = 89;
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
	public schedulerDeclaration(): SchedulerDeclarationContext {
		let _localctx: SchedulerDeclarationContext = new SchedulerDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, PaoParser.RULE_schedulerDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.match(PaoParser.SCHEDULER);
			this.state = 92;
			this.match(PaoParser.COLON);
			this.state = 93;
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
	public roleDeclaration(): RoleDeclarationContext {
		let _localctx: RoleDeclarationContext = new RoleDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, PaoParser.RULE_roleDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.match(PaoParser.ROLE);
			this.state = 96;
			this.match(PaoParser.COLON);
			this.state = 97;
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
	public enterRuleDeclaration(): EnterRuleDeclarationContext {
		let _localctx: EnterRuleDeclarationContext = new EnterRuleDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, PaoParser.RULE_enterRuleDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.match(PaoParser.ENTER_RULE);
			this.state = 100;
			this.match(PaoParser.COLON);
			this.state = 103;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 101;
				this.match(PaoParser.IDENTIFIER);
				}
				break;

			case 2:
				{
				this.state = 102;
				this.ruleList();
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
	public inputRuleDeclaration(): InputRuleDeclarationContext {
		let _localctx: InputRuleDeclarationContext = new InputRuleDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, PaoParser.RULE_inputRuleDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.match(PaoParser.INPUT_RULE);
			this.state = 106;
			this.match(PaoParser.COLON);
			this.state = 109;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 107;
				this.match(PaoParser.IDENTIFIER);
				}
				break;

			case 2:
				{
				this.state = 108;
				this.ruleList();
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
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, PaoParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(PaoParser.FIELD);
			this.state = 112;
			this.match(PaoParser.COLON);
			this.state = 113;
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
	public ruleList(): RuleListContext {
		let _localctx: RuleListContext = new RuleListContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, PaoParser.RULE_ruleList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.match(PaoParser.IDENTIFIER);
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PaoParser.T__0) {
				{
				{
				this.state = 116;
				this.match(PaoParser.T__0);
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PaoParser.WS) {
					{
					this.state = 117;
					this.match(PaoParser.WS);
					}
				}

				this.state = 120;
				this.match(PaoParser.IDENTIFIER);
				}
				}
				this.state = 125;
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
	public fieldList(): FieldListContext {
		let _localctx: FieldListContext = new FieldListContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, PaoParser.RULE_fieldList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.match(PaoParser.LBRACK);
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PaoParser.NAME) | (1 << PaoParser.DOMAIN_EVENT) | (1 << PaoParser.COMMAND) | (1 << PaoParser.CARRIER) | (1 << PaoParser.ENTER_RULE) | (1 << PaoParser.INPUT_RULE) | (1 << PaoParser.FIELD) | (1 << PaoParser.COMMENT_TEXT) | (1 << PaoParser.EXT_SYSTEM) | (1 << PaoParser.SCHEDULER) | (1 << PaoParser.ROLE))) !== 0)) {
				{
				{
				this.state = 127;
				this.typeRuleDeclaration();
				}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 133;
			this.match(PaoParser.RBRACK);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x17\x8A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
		"\x02\x03\x02\x07\x02\'\n\x02\f\x02\x0E\x02*\v\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x07\x058\n\x05\f\x05\x0E\x05;\v\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06H\n\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"j\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0Fp\n\x0F\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x05\x11y\n\x11\x03\x11\x07\x11" +
		"|\n\x11\f\x11\x0E\x11\x7F\v\x11\x03\x12\x03\x12\x07\x12\x83\n\x12\f\x12" +
		"\x0E\x12\x86\v\x12\x03\x12\x03\x12\x03\x12\x02\x02\x02\x13\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02\x02\x02\x02\x89\x02$\x03\x02" +
		"\x02\x02\x04-\x03\x02\x02\x02\x061\x03\x02\x02\x02\b5\x03\x02\x02\x02" +
		"\nG\x03\x02\x02\x02\fI\x03\x02\x02\x02\x0EM\x03\x02\x02\x02\x10Q\x03\x02" +
		"\x02\x02\x12U\x03\x02\x02\x02\x14Y\x03\x02\x02\x02\x16]\x03\x02\x02\x02" +
		"\x18a\x03\x02\x02\x02\x1Ae\x03\x02\x02\x02\x1Ck\x03\x02\x02\x02\x1Eq\x03" +
		"\x02\x02\x02 u\x03\x02\x02\x02\"\x80\x03\x02\x02\x02$(\x05\x04\x03\x02" +
		"%\'\x05\b\x05\x02&%\x03\x02\x02\x02\'*\x03\x02\x02\x02(&\x03\x02\x02\x02" +
		"()\x03\x02\x02\x02)+\x03\x02\x02\x02*(\x03\x02\x02\x02+,\x07\x02\x02\x03" +
		",\x03\x03\x02\x02\x02-.\x07\x05\x02\x02./\x07\x04\x02\x02/0\x07\x17\x02" +
		"\x020\x05\x03\x02\x02\x0212\x07\x06\x02\x0223\x07\x04\x02\x0234\x07\x17" +
		"\x02\x024\x07\x03\x02\x02\x0259\x05\n\x06\x0268\x05\n\x06\x0276\x03\x02" +
		"\x02\x028;\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:\t\x03" +
		"\x02\x02\x02;9\x03\x02\x02\x02<H\x05\f\x07\x02=H\x05\x06\x04\x02>H\x05" +
		"\x10\t\x02?H\x05\x0E\b\x02@H\x05\x1A\x0E\x02AH\x05\x1C\x0F\x02BH\x05\x12" +
		"\n\x02CH\x05\x14\v\x02DH\x05\x16\f\x02EH\x05\x18\r\x02FH\x05\x1E\x10\x02" +
		"G<\x03\x02\x02\x02G=\x03\x02\x02\x02G>\x03\x02\x02\x02G?\x03\x02\x02\x02" +
		"G@\x03\x02\x02\x02GA\x03\x02\x02\x02GB\x03\x02\x02\x02GC\x03\x02\x02\x02" +
		"GD\x03\x02\x02\x02GE\x03\x02\x02\x02GF\x03\x02\x02\x02H\v\x03\x02\x02" +
		"\x02IJ\x07\x07\x02\x02JK\x07\x04\x02\x02KL\x07\x17\x02\x02L\r\x03\x02" +
		"\x02\x02MN\x07\b\x02\x02NO\x07\x04\x02\x02OP\x07\x17\x02\x02P\x0F\x03" +
		"\x02\x02\x02QR\x07\t\x02\x02RS\x07\x04\x02\x02ST\x07\x17\x02\x02T\x11" +
		"\x03\x02\x02\x02UV\x07\r\x02\x02VW\x07\x04\x02\x02WX\x07\x17\x02\x02X" +
		"\x13\x03\x02\x02\x02YZ\x07\x0E\x02\x02Z[\x07\x04\x02\x02[\\\x07\x17\x02" +
		"\x02\\\x15\x03\x02\x02\x02]^\x07\x0F\x02\x02^_\x07\x04\x02\x02_`\x07\x17" +
		"\x02\x02`\x17\x03\x02\x02\x02ab\x07\x10\x02\x02bc\x07\x04\x02\x02cd\x07" +
		"\x17\x02\x02d\x19\x03\x02\x02\x02ef\x07\n\x02\x02fi\x07\x04\x02\x02gj" +
		"\x07\x17\x02\x02hj\x05 \x11\x02ig\x03\x02\x02\x02ih\x03\x02\x02\x02j\x1B" +
		"\x03\x02\x02\x02kl\x07\v\x02\x02lo\x07\x04\x02\x02mp\x07\x17\x02\x02n" +
		"p\x05 \x11\x02om\x03\x02\x02\x02on\x03\x02\x02\x02p\x1D\x03\x02\x02\x02" +
		"qr\x07\f\x02\x02rs\x07\x04\x02\x02st\x05\"\x12\x02t\x1F\x03\x02\x02\x02" +
		"u}\x07\x17\x02\x02vx\x07\x03\x02\x02wy\x07\x14\x02\x02xw\x03\x02\x02\x02" +
		"xy\x03\x02\x02\x02yz\x03\x02\x02\x02z|\x07\x17\x02\x02{v\x03\x02\x02\x02" +
		"|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02\x02~!\x03\x02\x02" +
		"\x02\x7F}\x03\x02\x02\x02\x80\x84\x07\x11\x02\x02\x81\x83\x05\n\x06\x02" +
		"\x82\x81\x03\x02\x02\x02\x83\x86\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02" +
		"\x84\x85\x03\x02\x02\x02\x85\x87\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02" +
		"\x87\x88\x07\x12\x02\x02\x88#\x03\x02\x02\x02\n(9Giox}\x84";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PaoParser.__ATN) {
			PaoParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PaoParser._serializedATN));
		}

		return PaoParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public systemNameDeclaration(): SystemNameDeclarationContext {
		return this.getRuleContext(0, SystemNameDeclarationContext);
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


export class SystemNameDeclarationContext extends ParserRuleContext {
	public SYSTEM_NAME(): TerminalNode { return this.getToken(PaoParser.SYSTEM_NAME, 0); }
	public COLON(): TerminalNode { return this.getToken(PaoParser.COLON, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(PaoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_systemNameDeclaration; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterSystemNameDeclaration) {
			listener.enterSystemNameDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitSystemNameDeclaration) {
			listener.exitSystemNameDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitSystemNameDeclaration) {
			return visitor.visitSystemNameDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameDeclarationContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(PaoParser.NAME, 0); }
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
	public domainEventDeclaration(): DomainEventDeclarationContext | undefined {
		return this.tryGetRuleContext(0, DomainEventDeclarationContext);
	}
	public nameDeclaration(): NameDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NameDeclarationContext);
	}
	public carrierDeclaration(): CarrierDeclarationContext | undefined {
		return this.tryGetRuleContext(0, CarrierDeclarationContext);
	}
	public commadEventDeclaration(): CommadEventDeclarationContext | undefined {
		return this.tryGetRuleContext(0, CommadEventDeclarationContext);
	}
	public enterRuleDeclaration(): EnterRuleDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnterRuleDeclarationContext);
	}
	public inputRuleDeclaration(): InputRuleDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InputRuleDeclarationContext);
	}
	public commentTextDeclaration(): CommentTextDeclarationContext | undefined {
		return this.tryGetRuleContext(0, CommentTextDeclarationContext);
	}
	public extSystemDeclaration(): ExtSystemDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ExtSystemDeclarationContext);
	}
	public schedulerDeclaration(): SchedulerDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SchedulerDeclarationContext);
	}
	public roleDeclaration(): RoleDeclarationContext | undefined {
		return this.tryGetRuleContext(0, RoleDeclarationContext);
	}
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
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


export class DomainEventDeclarationContext extends ParserRuleContext {
	public DOMAIN_EVENT(): TerminalNode { return this.getToken(PaoParser.DOMAIN_EVENT, 0); }
	public COLON(): TerminalNode { return this.getToken(PaoParser.COLON, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(PaoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_domainEventDeclaration; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterDomainEventDeclaration) {
			listener.enterDomainEventDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitDomainEventDeclaration) {
			listener.exitDomainEventDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitDomainEventDeclaration) {
			return visitor.visitDomainEventDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommadEventDeclarationContext extends ParserRuleContext {
	public COMMAND(): TerminalNode { return this.getToken(PaoParser.COMMAND, 0); }
	public COLON(): TerminalNode { return this.getToken(PaoParser.COLON, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(PaoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_commadEventDeclaration; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterCommadEventDeclaration) {
			listener.enterCommadEventDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitCommadEventDeclaration) {
			listener.exitCommadEventDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitCommadEventDeclaration) {
			return visitor.visitCommadEventDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CarrierDeclarationContext extends ParserRuleContext {
	public CARRIER(): TerminalNode { return this.getToken(PaoParser.CARRIER, 0); }
	public COLON(): TerminalNode { return this.getToken(PaoParser.COLON, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(PaoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_carrierDeclaration; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterCarrierDeclaration) {
			listener.enterCarrierDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitCarrierDeclaration) {
			listener.exitCarrierDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitCarrierDeclaration) {
			return visitor.visitCarrierDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentTextDeclarationContext extends ParserRuleContext {
	public COMMENT_TEXT(): TerminalNode { return this.getToken(PaoParser.COMMENT_TEXT, 0); }
	public COLON(): TerminalNode { return this.getToken(PaoParser.COLON, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(PaoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_commentTextDeclaration; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterCommentTextDeclaration) {
			listener.enterCommentTextDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitCommentTextDeclaration) {
			listener.exitCommentTextDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitCommentTextDeclaration) {
			return visitor.visitCommentTextDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtSystemDeclarationContext extends ParserRuleContext {
	public EXT_SYSTEM(): TerminalNode { return this.getToken(PaoParser.EXT_SYSTEM, 0); }
	public COLON(): TerminalNode { return this.getToken(PaoParser.COLON, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(PaoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_extSystemDeclaration; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterExtSystemDeclaration) {
			listener.enterExtSystemDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitExtSystemDeclaration) {
			listener.exitExtSystemDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitExtSystemDeclaration) {
			return visitor.visitExtSystemDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SchedulerDeclarationContext extends ParserRuleContext {
	public SCHEDULER(): TerminalNode { return this.getToken(PaoParser.SCHEDULER, 0); }
	public COLON(): TerminalNode { return this.getToken(PaoParser.COLON, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(PaoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_schedulerDeclaration; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterSchedulerDeclaration) {
			listener.enterSchedulerDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitSchedulerDeclaration) {
			listener.exitSchedulerDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitSchedulerDeclaration) {
			return visitor.visitSchedulerDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RoleDeclarationContext extends ParserRuleContext {
	public ROLE(): TerminalNode { return this.getToken(PaoParser.ROLE, 0); }
	public COLON(): TerminalNode { return this.getToken(PaoParser.COLON, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(PaoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_roleDeclaration; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterRoleDeclaration) {
			listener.enterRoleDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitRoleDeclaration) {
			listener.exitRoleDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitRoleDeclaration) {
			return visitor.visitRoleDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnterRuleDeclarationContext extends ParserRuleContext {
	public ENTER_RULE(): TerminalNode { return this.getToken(PaoParser.ENTER_RULE, 0); }
	public COLON(): TerminalNode { return this.getToken(PaoParser.COLON, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(PaoParser.IDENTIFIER, 0); }
	public ruleList(): RuleListContext | undefined {
		return this.tryGetRuleContext(0, RuleListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_enterRuleDeclaration; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterEnterRuleDeclaration) {
			listener.enterEnterRuleDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitEnterRuleDeclaration) {
			listener.exitEnterRuleDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitEnterRuleDeclaration) {
			return visitor.visitEnterRuleDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputRuleDeclarationContext extends ParserRuleContext {
	public INPUT_RULE(): TerminalNode { return this.getToken(PaoParser.INPUT_RULE, 0); }
	public COLON(): TerminalNode { return this.getToken(PaoParser.COLON, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(PaoParser.IDENTIFIER, 0); }
	public ruleList(): RuleListContext | undefined {
		return this.tryGetRuleContext(0, RuleListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_inputRuleDeclaration; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterInputRuleDeclaration) {
			listener.enterInputRuleDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitInputRuleDeclaration) {
			listener.exitInputRuleDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitInputRuleDeclaration) {
			return visitor.visitInputRuleDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public FIELD(): TerminalNode { return this.getToken(PaoParser.FIELD, 0); }
	public COLON(): TerminalNode { return this.getToken(PaoParser.COLON, 0); }
	public fieldList(): FieldListContext {
		return this.getRuleContext(0, FieldListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleListContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PaoParser.IDENTIFIER);
		} else {
			return this.getToken(PaoParser.IDENTIFIER, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PaoParser.WS);
		} else {
			return this.getToken(PaoParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PaoParser.RULE_ruleList; }
	// @Override
	public enterRule(listener: PaoListener): void {
		if (listener.enterRuleList) {
			listener.enterRuleList(this);
		}
	}
	// @Override
	public exitRule(listener: PaoListener): void {
		if (listener.exitRuleList) {
			listener.exitRuleList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PaoVisitor<Result>): Result {
		if (visitor.visitRuleList) {
			return visitor.visitRuleList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldListContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(PaoParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(PaoParser.RBRACK, 0); }
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


