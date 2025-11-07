# `dataOpentelekomcloudErFlowLogsV3` Submodule <a name="`dataOpentelekomcloudErFlowLogsV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudErFlowLogsV3 <a name="DataOpentelekomcloudErFlowLogsV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3 opentelekomcloud_er_flow_logs_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer"></a>

```typescript
import { dataOpentelekomcloudErFlowLogsV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3(scope: Construct, id: string, config: DataOpentelekomcloudErFlowLogsV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config">DataOpentelekomcloudErFlowLogsV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config">DataOpentelekomcloudErFlowLogsV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetFlowLogId">resetFlowLogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetLogGroupId">resetLogGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetLogStreamId">resetLogStreamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFlowLogId` <a name="resetFlowLogId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetFlowLogId"></a>

```typescript
public resetFlowLogId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogGroupId` <a name="resetLogGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetLogGroupId"></a>

```typescript
public resetLogGroupId(): void
```

##### `resetLogStreamId` <a name="resetLogStreamId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetLogStreamId"></a>

```typescript
public resetLogStreamId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetName"></a>

```typescript
public resetName(): void
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudErFlowLogsV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isConstruct"></a>

```typescript
import { dataOpentelekomcloudErFlowLogsV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudErFlowLogsV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudErFlowLogsV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudErFlowLogsV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudErFlowLogsV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudErFlowLogsV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudErFlowLogsV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudErFlowLogsV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.flowLogs">flowLogs</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList">DataOpentelekomcloudErFlowLogsV3FlowLogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.enabledInput">enabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.flowLogIdInput">flowLogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logGroupIdInput">logGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logStreamIdInput">logStreamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.enabled">enabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.flowLogId">flowLogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logStreamId">logStreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `flowLogs`<sup>Required</sup> <a name="flowLogs" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.flowLogs"></a>

```typescript
public readonly flowLogs: DataOpentelekomcloudErFlowLogsV3FlowLogsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList">DataOpentelekomcloudErFlowLogsV3FlowLogsList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.enabledInput"></a>

```typescript
public readonly enabledInput: string;
```

- *Type:* string

---

##### `flowLogIdInput`<sup>Optional</sup> <a name="flowLogIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.flowLogIdInput"></a>

```typescript
public readonly flowLogIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logGroupIdInput"></a>

```typescript
public readonly logGroupIdInput: string;
```

- *Type:* string

---

##### `logStreamIdInput`<sup>Optional</sup> <a name="logStreamIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logStreamIdInput"></a>

```typescript
public readonly logStreamIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.enabled"></a>

```typescript
public readonly enabled: string;
```

- *Type:* string

---

##### `flowLogId`<sup>Required</sup> <a name="flowLogId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.flowLogId"></a>

```typescript
public readonly flowLogId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logStreamId`<sup>Required</sup> <a name="logStreamId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logStreamId"></a>

```typescript
public readonly logStreamId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudErFlowLogsV3Config <a name="DataOpentelekomcloudErFlowLogsV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudErFlowLogsV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudErFlowLogsV3Config: dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#instance_id DataOpentelekomcloudErFlowLogsV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.enabled">enabled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#enabled DataOpentelekomcloudErFlowLogsV3#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.flowLogId">flowLogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#flow_log_id DataOpentelekomcloudErFlowLogsV3#flow_log_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#id DataOpentelekomcloudErFlowLogsV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.logGroupId">logGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#log_group_id DataOpentelekomcloudErFlowLogsV3#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.logStreamId">logStreamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#log_stream_id DataOpentelekomcloudErFlowLogsV3#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#name DataOpentelekomcloudErFlowLogsV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#resource_id DataOpentelekomcloudErFlowLogsV3#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#resource_type DataOpentelekomcloudErFlowLogsV3#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#status DataOpentelekomcloudErFlowLogsV3#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#instance_id DataOpentelekomcloudErFlowLogsV3#instance_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.enabled"></a>

```typescript
public readonly enabled: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#enabled DataOpentelekomcloudErFlowLogsV3#enabled}.

---

##### `flowLogId`<sup>Optional</sup> <a name="flowLogId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.flowLogId"></a>

```typescript
public readonly flowLogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#flow_log_id DataOpentelekomcloudErFlowLogsV3#flow_log_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#id DataOpentelekomcloudErFlowLogsV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logGroupId`<sup>Optional</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#log_group_id DataOpentelekomcloudErFlowLogsV3#log_group_id}.

---

##### `logStreamId`<sup>Optional</sup> <a name="logStreamId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.logStreamId"></a>

```typescript
public readonly logStreamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#log_stream_id DataOpentelekomcloudErFlowLogsV3#log_stream_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#name DataOpentelekomcloudErFlowLogsV3#name}.

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#resource_id DataOpentelekomcloudErFlowLogsV3#resource_id}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#resource_type DataOpentelekomcloudErFlowLogsV3#resource_type}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/er_flow_logs_v3#status DataOpentelekomcloudErFlowLogsV3#status}.

---

### DataOpentelekomcloudErFlowLogsV3FlowLogs <a name="DataOpentelekomcloudErFlowLogsV3FlowLogs" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogs.Initializer"></a>

```typescript
import { dataOpentelekomcloudErFlowLogsV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudErFlowLogsV3FlowLogs: dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogs = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudErFlowLogsV3FlowLogsList <a name="DataOpentelekomcloudErFlowLogsV3FlowLogsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer"></a>

```typescript
import { dataOpentelekomcloudErFlowLogsV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference <a name="DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudErFlowLogsV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.logStoreType">logStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.logStreamId">logStreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogs">DataOpentelekomcloudErFlowLogsV3FlowLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logStoreType`<sup>Required</sup> <a name="logStoreType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.logStoreType"></a>

```typescript
public readonly logStoreType: string;
```

- *Type:* string

---

##### `logStreamId`<sup>Required</sup> <a name="logStreamId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.logStreamId"></a>

```typescript
public readonly logStreamId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudErFlowLogsV3FlowLogs;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogs">DataOpentelekomcloudErFlowLogsV3FlowLogs</a>

---



