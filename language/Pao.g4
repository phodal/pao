grammar Pao;

modifier
    : NAME
    | DOMAIN_NAME
    | COMMAND
    | CARRIER
    | ENTER_RULE
    | INPUT_RULE
    ;

compilationUnit: nameDeclaration EOF;

//typeDeclaration* EOF;

nameDeclaration
    : modifier (':' | ':') IDENTIFIER
    ;

typeDeclaration
    : nameDeclaration
    | domainNameDeclaration
    ;

domainNameDeclaration
    : modifier (':' | ':') IDENTIFIER
    ;

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
NAME: '\u540D\u79F0' | '名称' | 'name';
DOMAIN_NAME: '领域事件';
COMMAND: '决策命令';
CARRIER: '领域名词';
ENTER_RULE: '出规则';
INPUT_RULE: '入规则';
FIELD: '字段';
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
    : [a-zA-Z$_] // these are the "java letters" below 0x7F
    | ~[\u0000-\u007F\uD800-\uDBFF] // covers all characters above 0x7F which are not a surrogate
    | [\uD800-\uDBFF] [\uDC00-\uDFFF] // covers UTF-16 surrogate pairs encodings for U+10000 to U+10FFFF
    ;
