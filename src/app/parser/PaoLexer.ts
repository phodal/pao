// Generated from Pao.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class PaoLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly COLON = 2;
	public static readonly SYSTEM_NAME = 3;
	public static readonly NAME = 4;
	public static readonly DOMAIN_EVENT = 5;
	public static readonly COMMAND = 6;
	public static readonly CONCEPT = 7;
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
	public static readonly NEWSECTION = 18;
	public static readonly WS = 19;
	public static readonly COMMENT = 20;
	public static readonly LINE_COMMENT = 21;
	public static readonly IDENTIFIER = 22;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "COLON", "SYSTEM_NAME", "NAME", "DOMAIN_EVENT", "COMMAND", "CONCEPT", 
		"ENTER_RULE", "INPUT_RULE", "FIELD", "COMMENT_TEXT", "EXT_SYSTEM", "SCHEDULER", 
		"ROLE", "LBRACK", "RBRACK", "COMMA", "NEWSECTION", "WS", "COMMENT", "LINE_COMMENT", 
		"IDENTIFIER", "LetterOrDigit", "Letter",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", undefined, "'\u7CFB\u7EDF\u540D\u79F0'", "'\u540D\u79F0'", 
		"'\u9886\u57DF\u4E8B\u4EF6'", "'\u51B3\u7B56\u547D\u4EE4'", "'\u9886\u57DF\u540D\u8BCD'", 
		"'\u51FA\u89C4\u5219'", "'\u5165\u89C4\u5219'", "'\u5B57\u6BB5'", "'\u6CE8\u91CA'", 
		"'\u5916\u90E8\u7CFB\u7EDF'", "'\u5B9A\u65F6\u4EFB\u52A1'", "'\u89D2\u8272'", 
		"'['", "']'", undefined, "'\nn'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "COLON", "SYSTEM_NAME", "NAME", "DOMAIN_EVENT", 
		"COMMAND", "CONCEPT", "ENTER_RULE", "INPUT_RULE", "FIELD", "COMMENT_TEXT", 
		"EXT_SYSTEM", "SCHEDULER", "ROLE", "LBRACK", "RBRACK", "COMMA", "NEWSECTION", 
		"WS", "COMMENT", "LINE_COMMENT", "IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PaoLexer._LITERAL_NAMES, PaoLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PaoLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(PaoLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Pao.g4"; }

	// @Override
	public get ruleNames(): string[] { return PaoLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return PaoLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return PaoLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return PaoLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x18\xA3\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x06" +
		"\x14t\n\x14\r\x14\x0E\x14u\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x07\x15~\n\x15\f\x15\x0E\x15\x81\v\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\x8C\n\x16\f\x16\x0E" +
		"\x16\x8F\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x07\x17\x95\n\x17\f\x17" +
		"\x0E\x17\x98\v\x17\x03\x18\x03\x18\x05\x18\x9C\n\x18\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x05\x19\xA2\n\x19\x03\x7F\x02\x02\x1A\x03\x02\x03\x05\x02" +
		"\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02" +
		"\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11" +
		"!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02" +
		"\x021\x02\x02\x03\x02\v\x04\x02<<\uFF1C\uFF1C\x04\x02..\uFF0E\uFF0E\x05" +
		"\x02\v\f\x0E\x0F\"\"\x04\x02\f\f\x0F\x0F\x03\x022;\x07\x02\"\"&&C\\aa" +
		"c|\x04\x02\x02\x81\uD802\uDC01\x03\x02\uD802\uDC01\x03\x02\uDC02\uE001" +
		"\x02\xA7\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02" +
		"\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02" +
		"\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02" +
		"\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02" +
		"\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02" +
		"\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02" +
		"\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03" +
		"\x02\x02\x02\x033\x03\x02\x02\x02\x055\x03\x02\x02\x02\x077\x03\x02\x02" +
		"\x02\t<\x03\x02\x02\x02\v?\x03\x02\x02\x02\rD\x03\x02\x02\x02\x0FI\x03" +
		"\x02\x02\x02\x11N\x03\x02\x02\x02\x13R\x03\x02\x02\x02\x15V\x03\x02\x02" +
		"\x02\x17Y\x03\x02\x02\x02\x19\\\x03\x02\x02\x02\x1Ba\x03\x02\x02\x02\x1D" +
		"f\x03\x02\x02\x02\x1Fi\x03\x02\x02\x02!k\x03\x02\x02\x02#m\x03\x02\x02" +
		"\x02%o\x03\x02\x02\x02\'s\x03\x02\x02\x02)y\x03\x02\x02\x02+\x87\x03\x02" +
		"\x02\x02-\x92\x03\x02\x02\x02/\x9B\x03\x02\x02\x021\xA1\x03\x02\x02\x02" +
		"34\x07.\x02\x024\x04\x03\x02\x02\x0256\t\x02\x02\x026\x06\x03\x02\x02" +
		"\x0278\x07\u7CFD\x02\x0289\x07\u7EE1\x02\x029:\x07\u540F\x02\x02:;\x07" +
		"\u79F2\x02\x02;\b\x03\x02\x02\x02<=\x07\u540F\x02\x02=>\x07\u79F2\x02" +
		"\x02>\n\x03\x02\x02\x02?@\x07\u9888\x02\x02@A\x07\u57E1\x02\x02AB\x07" +
		"\u4E8D\x02\x02BC\x07\u4EF8\x02\x02C\f\x03\x02\x02\x02DE\x07\u51B5\x02" +
		"\x02EF\x07\u7B58\x02\x02FG\x07\u547F\x02\x02GH\x07\u4EE6\x02\x02H\x0E" +
		"\x03\x02\x02\x02IJ\x07\u9888\x02\x02JK\x07\u57E1\x02\x02KL\x07\u540F\x02" +
		"\x02LM\x07\u8BCF\x02\x02M\x10\x03\x02\x02\x02NO\x07\u51FC\x02\x02OP\x07" +
		"\u89C6\x02\x02PQ\x07\u521B\x02\x02Q\x12\x03\x02\x02\x02RS\x07\u5167\x02" +
		"\x02ST\x07\u89C6\x02\x02TU\x07\u521B\x02\x02U\x14\x03\x02\x02\x02VW\x07" +
		"\u5B59\x02\x02WX\x07\u6BB7\x02\x02X\x16\x03\x02\x02\x02YZ\x07\u6CEA\x02" +
		"\x02Z[\x07\u91CC\x02\x02[\x18\x03\x02\x02\x02\\]\x07\u5918\x02\x02]^\x07" +
		"\u90EA\x02\x02^_\x07\u7CFD\x02\x02_`\x07\u7EE1\x02\x02`\x1A\x03\x02\x02" +
		"\x02ab\x07\u5B9C\x02\x02bc\x07\u65F8\x02\x02cd\x07\u4EFD\x02\x02de\x07" +
		"\u52A3\x02\x02e\x1C\x03\x02\x02\x02fg\x07\u89D4\x02\x02gh\x07\u8274\x02" +
		"\x02h\x1E\x03\x02\x02\x02ij\x07]\x02\x02j \x03\x02\x02\x02kl\x07_\x02" +
		"\x02l\"\x03\x02\x02\x02mn\t\x03\x02\x02n$\x03\x02\x02\x02op\x07\f\x02" +
		"\x02pq\x07\f\x02\x02q&\x03\x02\x02\x02rt\t\x04\x02\x02sr\x03\x02\x02\x02" +
		"tu\x03\x02\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02vw\x03\x02\x02\x02" +
		"wx\b\x14\x02\x02x(\x03\x02\x02\x02yz\x071\x02\x02z{\x07,\x02\x02{\x7F" +
		"\x03\x02\x02\x02|~\v\x02\x02\x02}|\x03\x02\x02\x02~\x81\x03\x02\x02\x02" +
		"\x7F\x80\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x80\x82\x03\x02\x02\x02" +
		"\x81\x7F\x03\x02\x02\x02\x82\x83\x07,\x02\x02\x83\x84\x071\x02\x02\x84" +
		"\x85\x03\x02\x02\x02\x85\x86\b\x15\x02\x02\x86*\x03\x02\x02\x02\x87\x88" +
		"\x071\x02\x02\x88\x89\x071\x02\x02\x89\x8D\x03\x02\x02\x02\x8A\x8C\n\x05" +
		"\x02\x02\x8B\x8A\x03\x02\x02\x02\x8C\x8F\x03\x02\x02\x02\x8D\x8B\x03\x02" +
		"\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x90\x03\x02\x02\x02\x8F\x8D\x03\x02" +
		"\x02\x02\x90\x91\b\x16\x02\x02\x91,\x03\x02\x02\x02\x92\x96\x051\x19\x02" +
		"\x93\x95\x05/\x18\x02\x94\x93\x03\x02\x02\x02\x95\x98\x03\x02\x02\x02" +
		"\x96\x94\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97.\x03\x02\x02\x02" +
		"\x98\x96\x03\x02\x02\x02\x99\x9C\x051\x19\x02\x9A\x9C\t\x06\x02\x02\x9B" +
		"\x99\x03\x02\x02\x02\x9B\x9A\x03\x02\x02\x02\x9C0\x03\x02\x02\x02\x9D" +
		"\xA2\t\x07\x02\x02\x9E\xA2\n\b\x02\x02\x9F\xA0\t\t\x02\x02\xA0\xA2\t\n" +
		"\x02\x02\xA1\x9D\x03\x02\x02\x02\xA1\x9E\x03\x02\x02\x02\xA1\x9F\x03\x02" +
		"\x02\x02\xA22\x03\x02\x02\x02\t\x02u\x7F\x8D\x96\x9B\xA1\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PaoLexer.__ATN) {
			PaoLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PaoLexer._serializedATN));
		}

		return PaoLexer.__ATN;
	}

}

