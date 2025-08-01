# `dataOpentelekomcloudCesEventsV1` Submodule <a name="`dataOpentelekomcloudCesEventsV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCesEventsV1 <a name="DataOpentelekomcloudCesEventsV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/ces_events_v1 opentelekomcloud_ces_events_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer"></a>

```typescript
import { dataOpentelekomcloudCesEventsV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1(scope: Construct, id: string, config?: DataOpentelekomcloudCesEventsV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config">DataOpentelekomcloudCesEventsV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config">DataOpentelekomcloudCesEventsV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetEventName">resetEventName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetEventType">resetEventType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetTo">resetTo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEventName` <a name="resetEventName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetEventName"></a>

```typescript
public resetEventName(): void
```

##### `resetEventType` <a name="resetEventType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetEventType"></a>

```typescript
public resetEventType(): void
```

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetFrom"></a>

```typescript
public resetFrom(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.resetTo"></a>

```typescript
public resetTo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCesEventsV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isConstruct"></a>

```typescript
import { dataOpentelekomcloudCesEventsV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudCesEventsV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudCesEventsV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudCesEventsV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudCesEventsV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudCesEventsV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudCesEventsV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/ces_events_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCesEventsV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.events">events</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList">DataOpentelekomcloudCesEventsV1EventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.metaData">metaData</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList">DataOpentelekomcloudCesEventsV1MetaDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.eventNameInput">eventNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.eventTypeInput">eventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.fromInput">fromInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.toInput">toInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.eventName">eventName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.from">from</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.to">to</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.events"></a>

```typescript
public readonly events: DataOpentelekomcloudCesEventsV1EventsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList">DataOpentelekomcloudCesEventsV1EventsList</a>

---

##### `metaData`<sup>Required</sup> <a name="metaData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.metaData"></a>

```typescript
public readonly metaData: DataOpentelekomcloudCesEventsV1MetaDataList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList">DataOpentelekomcloudCesEventsV1MetaDataList</a>

---

##### `eventNameInput`<sup>Optional</sup> <a name="eventNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.eventNameInput"></a>

```typescript
public readonly eventNameInput: string;
```

- *Type:* string

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.eventTypeInput"></a>

```typescript
public readonly eventTypeInput: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.fromInput"></a>

```typescript
public readonly fromInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.toInput"></a>

```typescript
public readonly toInput: number;
```

- *Type:* number

---

##### `eventName`<sup>Required</sup> <a name="eventName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.eventName"></a>

```typescript
public readonly eventName: string;
```

- *Type:* string

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.from"></a>

```typescript
public readonly from: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.to"></a>

```typescript
public readonly to: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCesEventsV1Config <a name="DataOpentelekomcloudCesEventsV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudCesEventsV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudCesEventsV1Config: dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.eventName">eventName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/ces_events_v1#event_name DataOpentelekomcloudCesEventsV1#event_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.eventType">eventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/ces_events_v1#event_type DataOpentelekomcloudCesEventsV1#event_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.from">from</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/ces_events_v1#from DataOpentelekomcloudCesEventsV1#from}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/ces_events_v1#id DataOpentelekomcloudCesEventsV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.limit">limit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/ces_events_v1#limit DataOpentelekomcloudCesEventsV1#limit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.to">to</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/ces_events_v1#to DataOpentelekomcloudCesEventsV1#to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `eventName`<sup>Optional</sup> <a name="eventName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.eventName"></a>

```typescript
public readonly eventName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/ces_events_v1#event_name DataOpentelekomcloudCesEventsV1#event_name}.

---

##### `eventType`<sup>Optional</sup> <a name="eventType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/ces_events_v1#event_type DataOpentelekomcloudCesEventsV1#event_type}.

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.from"></a>

```typescript
public readonly from: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/ces_events_v1#from DataOpentelekomcloudCesEventsV1#from}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/ces_events_v1#id DataOpentelekomcloudCesEventsV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/ces_events_v1#limit DataOpentelekomcloudCesEventsV1#limit}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Config.property.to"></a>

```typescript
public readonly to: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/ces_events_v1#to DataOpentelekomcloudCesEventsV1#to}.

---

### DataOpentelekomcloudCesEventsV1Events <a name="DataOpentelekomcloudCesEventsV1Events" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Events"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Events.Initializer"></a>

```typescript
import { dataOpentelekomcloudCesEventsV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudCesEventsV1Events: dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Events = { ... }
```


### DataOpentelekomcloudCesEventsV1MetaData <a name="DataOpentelekomcloudCesEventsV1MetaData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaData.Initializer"></a>

```typescript
import { dataOpentelekomcloudCesEventsV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudCesEventsV1MetaData: dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaData = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCesEventsV1EventsList <a name="DataOpentelekomcloudCesEventsV1EventsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.Initializer"></a>

```typescript
import { dataOpentelekomcloudCesEventsV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudCesEventsV1EventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudCesEventsV1EventsOutputReference <a name="DataOpentelekomcloudCesEventsV1EventsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudCesEventsV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.eventCount">eventCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.eventName">eventName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.latestEventSource">latestEventSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.latestOccurTime">latestOccurTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Events">DataOpentelekomcloudCesEventsV1Events</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventCount`<sup>Required</sup> <a name="eventCount" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.eventCount"></a>

```typescript
public readonly eventCount: number;
```

- *Type:* number

---

##### `eventName`<sup>Required</sup> <a name="eventName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.eventName"></a>

```typescript
public readonly eventName: string;
```

- *Type:* string

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `latestEventSource`<sup>Required</sup> <a name="latestEventSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.latestEventSource"></a>

```typescript
public readonly latestEventSource: string;
```

- *Type:* string

---

##### `latestOccurTime`<sup>Required</sup> <a name="latestOccurTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.latestOccurTime"></a>

```typescript
public readonly latestOccurTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1EventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudCesEventsV1Events;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1Events">DataOpentelekomcloudCesEventsV1Events</a>

---


### DataOpentelekomcloudCesEventsV1MetaDataList <a name="DataOpentelekomcloudCesEventsV1MetaDataList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.Initializer"></a>

```typescript
import { dataOpentelekomcloudCesEventsV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudCesEventsV1MetaDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudCesEventsV1MetaDataOutputReference <a name="DataOpentelekomcloudCesEventsV1MetaDataOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudCesEventsV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.property.total">total</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaData">DataOpentelekomcloudCesEventsV1MetaData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `total`<sup>Required</sup> <a name="total" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.property.total"></a>

```typescript
public readonly total: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudCesEventsV1MetaData;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCesEventsV1.DataOpentelekomcloudCesEventsV1MetaData">DataOpentelekomcloudCesEventsV1MetaData</a>

---



