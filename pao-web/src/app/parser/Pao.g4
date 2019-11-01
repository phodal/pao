grammar Pao;

compilationUnit: systemNameDeclaration typeDeclaration* EOF;

systemNameDeclaration: SYSTEM_NAME COLON IDENTIFIER;

typeDeclaration: typeRuleDeclaration (typeRuleDeclaration)*;

typeRuleDeclaration
    : domainEventDeclaration
    | nameDeclaration
    | conceptDeclaration
    | commandEventDeclaration
    | enterRuleDeclaration
    | inputRuleDeclaration
    | commentTextDeclaration
    | extSystemDeclaration
    | schedulerDeclaration
    | roleDeclaration
    | fieldDeclaration
    | newSectionDeclaration
    ;

nameDeclaration: NAME COLON IDENTIFIER;
domainEventDeclaration: DOMAIN_EVENT COLON IDENTIFIER;
commandEventDeclaration: COMMAND COLON IDENTIFIER;
conceptDeclaration: CONCEPT COLON IDENTIFIER;
commentTextDeclaration: COMMENT_TEXT COLON IDENTIFIER;
extSystemDeclaration: EXT_SYSTEM COLON IDENTIFIER;
schedulerDeclaration: SCHEDULER COLON IDENTIFIER;
roleDeclaration: ROLE COLON IDENTIFIER;

enterRuleDeclaration: ENTER_RULE COLON (IDENTIFIER | ruleList);
inputRuleDeclaration: INPUT_RULE COLON (IDENTIFIER | ruleList);
fieldDeclaration: FIELD COLON fieldList;

newSectionDeclaration: NEWSECTION;

ruleList
    : IDENTIFIER (',' WS? IDENTIFIER)*
    ;

fieldList
    : LBRACK typeRuleDeclaration* RBRACK
    ;

COLON: ':' | '：';
SYSTEM_NAME: '系统名称';
NAME: '名称';
DOMAIN_EVENT: '领域事件';
COMMAND: '决策命令';
CONCEPT: '领域名词';
ENTER_RULE: '出规则';
INPUT_RULE: '入规则';
FIELD: '字段';
COMMENT_TEXT: '注释' ;
EXT_SYSTEM: '外部系统' ;
SCHEDULER: '定时任务' ;
ROLE: '角色' ;
LBRACK: '[';
RBRACK: ']';
COMMA: ',' | '，';

NEWSECTION:             '\n\n';
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
