interface PaoModel {
  name: string;

  objects: DomainObject[];
}

interface DomainObject {
  eventName: string;
  commandName: string;
  rule: string[];
  concept: string;
  externalSystem?: string;
  trigger?: string;
  role: string;
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