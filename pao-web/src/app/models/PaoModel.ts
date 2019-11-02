interface PaoModel {
  name: string;

  objects: DomainObject[];
  map?: any;
}

interface RuleModel {
  parentId: string;
  id: string;
  rule: string;
}

interface DomainObject {
  id?: string;
  parentId?: string;
  ruleId?: string;

  eventName: string;
  commandName: string;
  conceptName: string;

  rules?: string[] | RuleModel[];
  ruleName?: string;

  comment?: string;
  externalSystem?: string;
  scheduler?: string;
  role?: string;
  location?: NodeLocation;
}

interface DomainObjectGraph extends DomainObject {
  position: {
    x: number;
    y: number;
  };
  children: DomainObject[];
}


enum DomainFieldType {
  ENTITY = 'Entity',
  VALUE_OBJECT = 'ValueObject'
}

interface DomainField {
  name: string;
  type: DomainFieldType;
  relationship: '1' | '1...N' | '0...1';
}

interface NodeLocation {
  index: number;
  column: number;
  nodeLevel: number;
  indexInRules: number;
}
