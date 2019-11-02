interface PaoModel {
  name: string;

  objects: DomainObject[];
}

interface RuleModel {
  parentId: number;
  id: number;
  rule: string;
}

interface DomainObject {
  id?: number;
  parentId?: number;
  ruleId?: number;
  eventName: string;
  commandName: string;
  rules: string[] | RuleModel[];
  conceptName: string;
  comment?: string;
  externalSystem?: string;
  scheduler?: string;
  role?: string;
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
