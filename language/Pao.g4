grammar Pao;

modifier
    : NAME
    | DOMAIN_EVENT
    | COMMAND
    | CARRIER
    | ENTER_RULE
    | INPUT_RULE
    ;

compilationUnit: nameDeclaration typeDeclaration* EOF;

nameDeclaration
    : modifier (':' | ':') IDENTIFIER
    ;

typeDeclaration
    : nameDeclaration
    | typeRuleDeclaration
    ;

typeRuleDeclaration : modifier (':' | ':') (IDENTIFIER | formalParameterList | fieldParameters) ;

qualifiedName
    : IDENTIFIER
    ;

formalParameterList
    : qualifiedName (',' qualifiedName)*
    ;

fieldParameters
    : FIELD COLON fieldList
    ;

fieldList
    : IDENTIFIER (',' IDENTIFIER)*
    ;

COLON: ':' | '：';
NAME: '名称' | '\u540D\u79F0' | 'name';
DOMAIN_EVENT: '领域事件' | '\u9886\u57DF\u4E8B\u4EF6' ;
COMMAND: '决策命令' | '\u51B3\u7B56\u547D\u4EE4';
CARRIER: '领域名词' | '\u9886\u57DF\u540D\u8BCD';
ENTER_RULE: '出规则' | '\u51FA\u89C4\u5219';
INPUT_RULE: '入规则' | '\u5165\u89C4\u5219';
FIELD: '字段' | '\u5B57\u6BB5';
LBRACK: '[';
RBRACK: ']';

WS:                 [ \t\r\n\u000C]+ -> channel(HIDDEN);
COMMENT:            '/*' .*? '*/'    -> channel(HIDDEN);
LINE_COMMENT:       '//' ~[\r\n]*    -> channel(HIDDEN);

IDENTIFIER: Letter LetterOrDigit*;

fragment LetterOrDigit
    : Letter
    | [0-9]
    ;

fragment Letter
    : [a-zA-Z$_ ] // these are the "java letters" below 0x7F
    | ~[\u0000-\u007F\uD800-\uDBFF] // covers all characters above 0x7F which are not a surrogate
    | [\uD800-\uDBFF] [\uDC00-\uDFFF] // covers UTF-16 surrogate pairs encodings for U+10000 to U+10FFFF
    ;
