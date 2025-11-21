# `dataOpentelekomcloudGeminiInstancesV3` Submodule <a name="`dataOpentelekomcloudGeminiInstancesV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudGeminiInstancesV3 <a name="DataOpentelekomcloudGeminiInstancesV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3 opentelekomcloud_gemini_instances_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer"></a>

```typescript
import { dataOpentelekomcloudGeminiInstancesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3(scope: Construct, id: string, config?: DataOpentelekomcloudGeminiInstancesV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config">DataOpentelekomcloudGeminiInstancesV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config">DataOpentelekomcloudGeminiInstancesV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudGeminiInstancesV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isConstruct"></a>

```typescript
import { dataOpentelekomcloudGeminiInstancesV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudGeminiInstancesV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudGeminiInstancesV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudGeminiInstancesV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudGeminiInstancesV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudGeminiInstancesV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudGeminiInstancesV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudGeminiInstancesV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList">DataOpentelekomcloudGeminiInstancesV3InstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.instances"></a>

```typescript
public readonly instances: DataOpentelekomcloudGeminiInstancesV3InstancesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList">DataOpentelekomcloudGeminiInstancesV3InstancesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudGeminiInstancesV3Config <a name="DataOpentelekomcloudGeminiInstancesV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudGeminiInstancesV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudGeminiInstancesV3Config: dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#id DataOpentelekomcloudGeminiInstancesV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#name DataOpentelekomcloudGeminiInstancesV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#subnet_id DataOpentelekomcloudGeminiInstancesV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#vpc_id DataOpentelekomcloudGeminiInstancesV3#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#id DataOpentelekomcloudGeminiInstancesV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#name DataOpentelekomcloudGeminiInstancesV3#name}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#subnet_id DataOpentelekomcloudGeminiInstancesV3#subnet_id}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Config.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/gemini_instances_v3#vpc_id DataOpentelekomcloudGeminiInstancesV3#vpc_id}.

---

### DataOpentelekomcloudGeminiInstancesV3Instances <a name="DataOpentelekomcloudGeminiInstancesV3Instances" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Instances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Instances.Initializer"></a>

```typescript
import { dataOpentelekomcloudGeminiInstancesV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudGeminiInstancesV3Instances: dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Instances = { ... }
```


### DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy <a name="DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy.Initializer"></a>

```typescript
import { dataOpentelekomcloudGeminiInstancesV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy: dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy = { ... }
```


### DataOpentelekomcloudGeminiInstancesV3InstancesDatastore <a name="DataOpentelekomcloudGeminiInstancesV3InstancesDatastore" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastore.Initializer"></a>

```typescript
import { dataOpentelekomcloudGeminiInstancesV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudGeminiInstancesV3InstancesDatastore: dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastore = { ... }
```


### DataOpentelekomcloudGeminiInstancesV3InstancesNodes <a name="DataOpentelekomcloudGeminiInstancesV3InstancesNodes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodes.Initializer"></a>

```typescript
import { dataOpentelekomcloudGeminiInstancesV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudGeminiInstancesV3InstancesNodes: dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList <a name="DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.Initializer"></a>

```typescript
import { dataOpentelekomcloudGeminiInstancesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference <a name="DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudGeminiInstancesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.keepDays">keepDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy">DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keepDays`<sup>Required</sup> <a name="keepDays" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.keepDays"></a>

```typescript
public readonly keepDays: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy">DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategy</a>

---


### DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList <a name="DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.Initializer"></a>

```typescript
import { dataOpentelekomcloudGeminiInstancesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference <a name="DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudGeminiInstancesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.storageEngine">storageEngine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastore">DataOpentelekomcloudGeminiInstancesV3InstancesDatastore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `storageEngine`<sup>Required</sup> <a name="storageEngine" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.storageEngine"></a>

```typescript
public readonly storageEngine: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudGeminiInstancesV3InstancesDatastore;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastore">DataOpentelekomcloudGeminiInstancesV3InstancesDatastore</a>

---


### DataOpentelekomcloudGeminiInstancesV3InstancesList <a name="DataOpentelekomcloudGeminiInstancesV3InstancesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.Initializer"></a>

```typescript
import { dataOpentelekomcloudGeminiInstancesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudGeminiInstancesV3InstancesNodesList <a name="DataOpentelekomcloudGeminiInstancesV3InstancesNodesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.Initializer"></a>

```typescript
import { dataOpentelekomcloudGeminiInstancesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference <a name="DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudGeminiInstancesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.supportReduce">supportReduce</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodes">DataOpentelekomcloudGeminiInstancesV3InstancesNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `supportReduce`<sup>Required</sup> <a name="supportReduce" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.supportReduce"></a>

```typescript
public readonly supportReduce: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudGeminiInstancesV3InstancesNodes;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodes">DataOpentelekomcloudGeminiInstancesV3InstancesNodes</a>

---


### DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference <a name="DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudGeminiInstancesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.backupStrategy">backupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList">DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.datastore">datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList">DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.dbUserName">dbUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.flavor">flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.nodeNum">nodeNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList">DataOpentelekomcloudGeminiInstancesV3InstancesNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.privateIps">privateIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Instances">DataOpentelekomcloudGeminiInstancesV3Instances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `backupStrategy`<sup>Required</sup> <a name="backupStrategy" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.backupStrategy"></a>

```typescript
public readonly backupStrategy: DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList">DataOpentelekomcloudGeminiInstancesV3InstancesBackupStrategyList</a>

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.datastore"></a>

```typescript
public readonly datastore: DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList">DataOpentelekomcloudGeminiInstancesV3InstancesDatastoreList</a>

---

##### `dbUserName`<sup>Required</sup> <a name="dbUserName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.dbUserName"></a>

```typescript
public readonly dbUserName: string;
```

- *Type:* string

---

##### `enterpriseProjectId`<sup>Required</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.enterpriseProjectId"></a>

```typescript
public readonly enterpriseProjectId: string;
```

- *Type:* string

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeNum`<sup>Required</sup> <a name="nodeNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.nodeNum"></a>

```typescript
public readonly nodeNum: number;
```

- *Type:* number

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.nodes"></a>

```typescript
public readonly nodes: DataOpentelekomcloudGeminiInstancesV3InstancesNodesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesNodesList">DataOpentelekomcloudGeminiInstancesV3InstancesNodesList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `privateIps`<sup>Required</sup> <a name="privateIps" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.privateIps"></a>

```typescript
public readonly privateIps: string[];
```

- *Type:* string[]

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3InstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudGeminiInstancesV3Instances;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiInstancesV3.DataOpentelekomcloudGeminiInstancesV3Instances">DataOpentelekomcloudGeminiInstancesV3Instances</a>

---



