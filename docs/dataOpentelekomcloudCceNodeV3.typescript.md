# `dataOpentelekomcloudCceNodeV3` Submodule <a name="`dataOpentelekomcloudCceNodeV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCceNodeV3 <a name="DataOpentelekomcloudCceNodeV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cce_node_v3 opentelekomcloud_cce_node_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.Initializer"></a>

```typescript
import { dataOpentelekomcloudCceNodeV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3(scope: Construct, id: string, config: DataOpentelekomcloudCceNodeV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config">DataOpentelekomcloudCceNodeV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config">DataOpentelekomcloudCceNodeV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.resetNodeId">resetNodeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNodeId` <a name="resetNodeId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.resetNodeId"></a>

```typescript
public resetNodeId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCceNodeV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.isConstruct"></a>

```typescript
import { dataOpentelekomcloudCceNodeV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudCceNodeV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudCceNodeV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudCceNodeV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudCceNodeV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudCceNodeV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudCceNodeV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cce_node_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCceNodeV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.bandwidthSize">bandwidthSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.billingMode">billingMode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.chargeMode">chargeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.dataVolumes">dataVolumes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList">DataOpentelekomcloudCceNodeV3DataVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.diskSize">diskSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.eipCount">eipCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.eipIds">eipIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.flavorId">flavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.ipType">ipType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.keyPair">keyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.publicIp">publicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.shareType">shareType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.nodeIdInput">nodeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.nodeId">nodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `bandwidthSize`<sup>Required</sup> <a name="bandwidthSize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.bandwidthSize"></a>

```typescript
public readonly bandwidthSize: number;
```

- *Type:* number

---

##### `billingMode`<sup>Required</sup> <a name="billingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.billingMode"></a>

```typescript
public readonly billingMode: number;
```

- *Type:* number

---

##### `chargeMode`<sup>Required</sup> <a name="chargeMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.chargeMode"></a>

```typescript
public readonly chargeMode: string;
```

- *Type:* string

---

##### `dataVolumes`<sup>Required</sup> <a name="dataVolumes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.dataVolumes"></a>

```typescript
public readonly dataVolumes: DataOpentelekomcloudCceNodeV3DataVolumesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList">DataOpentelekomcloudCceNodeV3DataVolumesList</a>

---

##### `diskSize`<sup>Required</sup> <a name="diskSize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* number

---

##### `eipCount`<sup>Required</sup> <a name="eipCount" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.eipCount"></a>

```typescript
public readonly eipCount: number;
```

- *Type:* number

---

##### `eipIds`<sup>Required</sup> <a name="eipIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.eipIds"></a>

```typescript
public readonly eipIds: string[];
```

- *Type:* string[]

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.flavorId"></a>

```typescript
public readonly flavorId: string;
```

- *Type:* string

---

##### `ipType`<sup>Required</sup> <a name="ipType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.ipType"></a>

```typescript
public readonly ipType: string;
```

- *Type:* string

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.keyPair"></a>

```typescript
public readonly keyPair: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.publicIp"></a>

```typescript
public readonly publicIp: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

##### `shareType`<sup>Required</sup> <a name="shareType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.shareType"></a>

```typescript
public readonly shareType: string;
```

- *Type:* string

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeIdInput`<sup>Optional</sup> <a name="nodeIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.nodeIdInput"></a>

```typescript
public readonly nodeIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCceNodeV3Config <a name="DataOpentelekomcloudCceNodeV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudCceNodeV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudCceNodeV3Config: dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cce_node_v3#cluster_id DataOpentelekomcloudCceNodeV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cce_node_v3#id DataOpentelekomcloudCceNodeV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cce_node_v3#name DataOpentelekomcloudCceNodeV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.nodeId">nodeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cce_node_v3#node_id DataOpentelekomcloudCceNodeV3#node_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cce_node_v3#region DataOpentelekomcloudCceNodeV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cce_node_v3#status DataOpentelekomcloudCceNodeV3#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cce_node_v3#cluster_id DataOpentelekomcloudCceNodeV3#cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cce_node_v3#id DataOpentelekomcloudCceNodeV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cce_node_v3#name DataOpentelekomcloudCceNodeV3#name}.

---

##### `nodeId`<sup>Optional</sup> <a name="nodeId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cce_node_v3#node_id DataOpentelekomcloudCceNodeV3#node_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cce_node_v3#region DataOpentelekomcloudCceNodeV3#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cce_node_v3#status DataOpentelekomcloudCceNodeV3#status}.

---

### DataOpentelekomcloudCceNodeV3DataVolumes <a name="DataOpentelekomcloudCceNodeV3DataVolumes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumes.Initializer"></a>

```typescript
import { dataOpentelekomcloudCceNodeV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudCceNodeV3DataVolumes: dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCceNodeV3DataVolumesList <a name="DataOpentelekomcloudCceNodeV3DataVolumesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.Initializer"></a>

```typescript
import { dataOpentelekomcloudCceNodeV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudCceNodeV3DataVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudCceNodeV3DataVolumesOutputReference <a name="DataOpentelekomcloudCceNodeV3DataVolumesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudCceNodeV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.property.diskSize">diskSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.property.extendParams">extendParams</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.property.kmsId">kmsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumes">DataOpentelekomcloudCceNodeV3DataVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskSize`<sup>Required</sup> <a name="diskSize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* number

---

##### `extendParams`<sup>Required</sup> <a name="extendParams" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.property.extendParams"></a>

```typescript
public readonly extendParams: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `kmsId`<sup>Required</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.property.kmsId"></a>

```typescript
public readonly kmsId: string;
```

- *Type:* string

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudCceNodeV3DataVolumes;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceNodeV3.DataOpentelekomcloudCceNodeV3DataVolumes">DataOpentelekomcloudCceNodeV3DataVolumes</a>

---



