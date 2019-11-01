import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {PaoLexer} from "./parser/PaoLexer";
import {PaoParser} from "./parser/PaoParser";

// Create the lexer and parser
let inputStream = CharStreams.fromString(`
名称:庖丁解牛系统

领域事件:a
决策命令:a
领域名词:a
出规则:rule 1, rule 2, rule 3

入规则:rule 1
领域事件: b
决策命令:b
领域名词:b
`);
let lexer = new PaoLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new PaoParser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
let tree = parser.compilationUnit();

console.log(tree);