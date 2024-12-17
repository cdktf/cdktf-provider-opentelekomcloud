# `dataOpentelekomcloudHssHostGroupsV5` Submodule <a name="`dataOpentelekomcloudHssHostGroupsV5` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudHssHostGroupsV5 <a name="DataOpentelekomcloudHssHostGroupsV5" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/hss_host_groups_v5 opentelekomcloud_hss_host_groups_v5}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer"></a>

```typescript
import { dataOpentelekomcloudHssHostGroupsV5 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5(scope: Construct, id: string, config?: DataOpentelekomcloudHssHostGroupsV5Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config">DataOpentelekomcloudHssHostGroupsV5Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config">DataOpentelekomcloudHssHostGroupsV5Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetHostNum">resetHostNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetRiskHostNum">resetRiskHostNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetUnprotectHostNum">resetUnprotectHostNum</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetHostNum` <a name="resetHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetHostNum"></a>

```typescript
public resetHostNum(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRiskHostNum` <a name="resetRiskHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetRiskHostNum"></a>

```typescript
public resetRiskHostNum(): void
```

##### `resetUnprotectHostNum` <a name="resetUnprotectHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.resetUnprotectHostNum"></a>

```typescript
public resetUnprotectHostNum(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudHssHostGroupsV5 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isConstruct"></a>

```typescript
import { dataOpentelekomcloudHssHostGroupsV5 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudHssHostGroupsV5 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudHssHostGroupsV5 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudHssHostGroupsV5 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudHssHostGroupsV5 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudHssHostGroupsV5 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudHssHostGroupsV5 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/hss_host_groups_v5#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudHssHostGroupsV5 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groups">groups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList">DataOpentelekomcloudHssHostGroupsV5GroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.hostNumInput">hostNumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.riskHostNumInput">riskHostNumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.unprotectHostNumInput">unprotectHostNumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.hostNum">hostNum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.riskHostNum">riskHostNum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.unprotectHostNum">unprotectHostNum</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groups"></a>

```typescript
public readonly groups: DataOpentelekomcloudHssHostGroupsV5GroupsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList">DataOpentelekomcloudHssHostGroupsV5GroupsList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `hostNumInput`<sup>Optional</sup> <a name="hostNumInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.hostNumInput"></a>

```typescript
public readonly hostNumInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `riskHostNumInput`<sup>Optional</sup> <a name="riskHostNumInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.riskHostNumInput"></a>

```typescript
public readonly riskHostNumInput: string;
```

- *Type:* string

---

##### `unprotectHostNumInput`<sup>Optional</sup> <a name="unprotectHostNumInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.unprotectHostNumInput"></a>

```typescript
public readonly unprotectHostNumInput: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `hostNum`<sup>Required</sup> <a name="hostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.hostNum"></a>

```typescript
public readonly hostNum: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `riskHostNum`<sup>Required</sup> <a name="riskHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.riskHostNum"></a>

```typescript
public readonly riskHostNum: string;
```

- *Type:* string

---

##### `unprotectHostNum`<sup>Required</sup> <a name="unprotectHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.unprotectHostNum"></a>

```typescript
public readonly unprotectHostNum: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudHssHostGroupsV5Config <a name="DataOpentelekomcloudHssHostGroupsV5Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudHssHostGroupsV5 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudHssHostGroupsV5Config: dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/hss_host_groups_v5#group_id DataOpentelekomcloudHssHostGroupsV5#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.hostNum">hostNum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/hss_host_groups_v5#host_num DataOpentelekomcloudHssHostGroupsV5#host_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/hss_host_groups_v5#id DataOpentelekomcloudHssHostGroupsV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/hss_host_groups_v5#name DataOpentelekomcloudHssHostGroupsV5#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.riskHostNum">riskHostNum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/hss_host_groups_v5#risk_host_num DataOpentelekomcloudHssHostGroupsV5#risk_host_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.unprotectHostNum">unprotectHostNum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/hss_host_groups_v5#unprotect_host_num DataOpentelekomcloudHssHostGroupsV5#unprotect_host_num}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/hss_host_groups_v5#group_id DataOpentelekomcloudHssHostGroupsV5#group_id}.

---

##### `hostNum`<sup>Optional</sup> <a name="hostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.hostNum"></a>

```typescript
public readonly hostNum: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/hss_host_groups_v5#host_num DataOpentelekomcloudHssHostGroupsV5#host_num}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/hss_host_groups_v5#id DataOpentelekomcloudHssHostGroupsV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/hss_host_groups_v5#name DataOpentelekomcloudHssHostGroupsV5#name}.

---

##### `riskHostNum`<sup>Optional</sup> <a name="riskHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.riskHostNum"></a>

```typescript
public readonly riskHostNum: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/hss_host_groups_v5#risk_host_num DataOpentelekomcloudHssHostGroupsV5#risk_host_num}.

---

##### `unprotectHostNum`<sup>Optional</sup> <a name="unprotectHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Config.property.unprotectHostNum"></a>

```typescript
public readonly unprotectHostNum: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/data-sources/hss_host_groups_v5#unprotect_host_num DataOpentelekomcloudHssHostGroupsV5#unprotect_host_num}.

---

### DataOpentelekomcloudHssHostGroupsV5Groups <a name="DataOpentelekomcloudHssHostGroupsV5Groups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Groups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Groups.Initializer"></a>

```typescript
import { dataOpentelekomcloudHssHostGroupsV5 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudHssHostGroupsV5Groups: dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Groups = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudHssHostGroupsV5GroupsList <a name="DataOpentelekomcloudHssHostGroupsV5GroupsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer"></a>

```typescript
import { dataOpentelekomcloudHssHostGroupsV5 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference <a name="DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudHssHostGroupsV5 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.hostIds">hostIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.hostNum">hostNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.riskHostNum">riskHostNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.unprotectHostNum">unprotectHostNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Groups">DataOpentelekomcloudHssHostGroupsV5Groups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostIds`<sup>Required</sup> <a name="hostIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.hostIds"></a>

```typescript
public readonly hostIds: string[];
```

- *Type:* string[]

---

##### `hostNum`<sup>Required</sup> <a name="hostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.hostNum"></a>

```typescript
public readonly hostNum: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `riskHostNum`<sup>Required</sup> <a name="riskHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.riskHostNum"></a>

```typescript
public readonly riskHostNum: number;
```

- *Type:* number

---

##### `unprotectHostNum`<sup>Required</sup> <a name="unprotectHostNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.unprotectHostNum"></a>

```typescript
public readonly unprotectHostNum: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudHssHostGroupsV5Groups;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostGroupsV5.DataOpentelekomcloudHssHostGroupsV5Groups">DataOpentelekomcloudHssHostGroupsV5Groups</a>

---



