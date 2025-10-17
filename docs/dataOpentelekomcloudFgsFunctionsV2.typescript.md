# `dataOpentelekomcloudFgsFunctionsV2` Submodule <a name="`dataOpentelekomcloudFgsFunctionsV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudFgsFunctionsV2 <a name="DataOpentelekomcloudFgsFunctionsV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/fgs_functions_v2 opentelekomcloud_fgs_functions_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer"></a>

```typescript
import { dataOpentelekomcloudFgsFunctionsV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2(scope: Construct, id: string, config?: DataOpentelekomcloudFgsFunctionsV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config">DataOpentelekomcloudFgsFunctionsV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config">DataOpentelekomcloudFgsFunctionsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetEnterpriseProjectId">resetEnterpriseProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetPackageName">resetPackageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetUrn">resetUrn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEnterpriseProjectId` <a name="resetEnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetEnterpriseProjectId"></a>

```typescript
public resetEnterpriseProjectId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPackageName` <a name="resetPackageName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetPackageName"></a>

```typescript
public resetPackageName(): void
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetRuntime"></a>

```typescript
public resetRuntime(): void
```

##### `resetUrn` <a name="resetUrn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetUrn"></a>

```typescript
public resetUrn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudFgsFunctionsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isConstruct"></a>

```typescript
import { dataOpentelekomcloudFgsFunctionsV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudFgsFunctionsV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudFgsFunctionsV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudFgsFunctionsV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudFgsFunctionsV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudFgsFunctionsV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudFgsFunctionsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/fgs_functions_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudFgsFunctionsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.functions">functions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList">DataOpentelekomcloudFgsFunctionsV2FunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.enterpriseProjectIdInput">enterpriseProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.packageNameInput">packageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.urnInput">urnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.urn">urn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.functions"></a>

```typescript
public readonly functions: DataOpentelekomcloudFgsFunctionsV2FunctionsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList">DataOpentelekomcloudFgsFunctionsV2FunctionsList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `enterpriseProjectIdInput`<sup>Optional</sup> <a name="enterpriseProjectIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.enterpriseProjectIdInput"></a>

```typescript
public readonly enterpriseProjectIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `packageNameInput`<sup>Optional</sup> <a name="packageNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.packageNameInput"></a>

```typescript
public readonly packageNameInput: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `urnInput`<sup>Optional</sup> <a name="urnInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.urnInput"></a>

```typescript
public readonly urnInput: string;
```

- *Type:* string

---

##### `enterpriseProjectId`<sup>Required</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.enterpriseProjectId"></a>

```typescript
public readonly enterpriseProjectId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.urn"></a>

```typescript
public readonly urn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudFgsFunctionsV2Config <a name="DataOpentelekomcloudFgsFunctionsV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudFgsFunctionsV2 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudFgsFunctionsV2Config: dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/fgs_functions_v2#enterprise_project_id DataOpentelekomcloudFgsFunctionsV2#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/fgs_functions_v2#id DataOpentelekomcloudFgsFunctionsV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/fgs_functions_v2#name DataOpentelekomcloudFgsFunctionsV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.packageName">packageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/fgs_functions_v2#package_name DataOpentelekomcloudFgsFunctionsV2#package_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.runtime">runtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/fgs_functions_v2#runtime DataOpentelekomcloudFgsFunctionsV2#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.urn">urn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/fgs_functions_v2#urn DataOpentelekomcloudFgsFunctionsV2#urn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enterpriseProjectId`<sup>Optional</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.enterpriseProjectId"></a>

```typescript
public readonly enterpriseProjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/fgs_functions_v2#enterprise_project_id DataOpentelekomcloudFgsFunctionsV2#enterprise_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/fgs_functions_v2#id DataOpentelekomcloudFgsFunctionsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/fgs_functions_v2#name DataOpentelekomcloudFgsFunctionsV2#name}.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/fgs_functions_v2#package_name DataOpentelekomcloudFgsFunctionsV2#package_name}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/fgs_functions_v2#runtime DataOpentelekomcloudFgsFunctionsV2#runtime}.

---

##### `urn`<sup>Optional</sup> <a name="urn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.urn"></a>

```typescript
public readonly urn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/fgs_functions_v2#urn DataOpentelekomcloudFgsFunctionsV2#urn}.

---

### DataOpentelekomcloudFgsFunctionsV2Functions <a name="DataOpentelekomcloudFgsFunctionsV2Functions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Functions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Functions.Initializer"></a>

```typescript
import { dataOpentelekomcloudFgsFunctionsV2 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudFgsFunctionsV2Functions: dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Functions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudFgsFunctionsV2FunctionsList <a name="DataOpentelekomcloudFgsFunctionsV2FunctionsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer"></a>

```typescript
import { dataOpentelekomcloudFgsFunctionsV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference <a name="DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudFgsFunctionsV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.appAgency">appAgency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.codeFilename">codeFilename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.codeType">codeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.codeUrl">codeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.encryptedUserData">encryptedUserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.functiongraphVersion">functiongraphVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.initializerHandler">initializerHandler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.initializerTimeout">initializerTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.logStreamId">logStreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.maxInstanceNum">maxInstanceNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.memorySize">memorySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.package">package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.urn">urn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Functions">DataOpentelekomcloudFgsFunctionsV2Functions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appAgency`<sup>Required</sup> <a name="appAgency" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.appAgency"></a>

```typescript
public readonly appAgency: string;
```

- *Type:* string

---

##### `codeFilename`<sup>Required</sup> <a name="codeFilename" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.codeFilename"></a>

```typescript
public readonly codeFilename: string;
```

- *Type:* string

---

##### `codeType`<sup>Required</sup> <a name="codeType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.codeType"></a>

```typescript
public readonly codeType: string;
```

- *Type:* string

---

##### `codeUrl`<sup>Required</sup> <a name="codeUrl" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.codeUrl"></a>

```typescript
public readonly codeUrl: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `encryptedUserData`<sup>Required</sup> <a name="encryptedUserData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.encryptedUserData"></a>

```typescript
public readonly encryptedUserData: string;
```

- *Type:* string

---

##### `enterpriseProjectId`<sup>Required</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.enterpriseProjectId"></a>

```typescript
public readonly enterpriseProjectId: string;
```

- *Type:* string

---

##### `functiongraphVersion`<sup>Required</sup> <a name="functiongraphVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.functiongraphVersion"></a>

```typescript
public readonly functiongraphVersion: string;
```

- *Type:* string

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `initializerHandler`<sup>Required</sup> <a name="initializerHandler" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.initializerHandler"></a>

```typescript
public readonly initializerHandler: string;
```

- *Type:* string

---

##### `initializerTimeout`<sup>Required</sup> <a name="initializerTimeout" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.initializerTimeout"></a>

```typescript
public readonly initializerTimeout: number;
```

- *Type:* number

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logStreamId`<sup>Required</sup> <a name="logStreamId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.logStreamId"></a>

```typescript
public readonly logStreamId: string;
```

- *Type:* string

---

##### `maxInstanceNum`<sup>Required</sup> <a name="maxInstanceNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.maxInstanceNum"></a>

```typescript
public readonly maxInstanceNum: number;
```

- *Type:* number

---

##### `memorySize`<sup>Required</sup> <a name="memorySize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.urn"></a>

```typescript
public readonly urn: string;
```

- *Type:* string

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudFgsFunctionsV2Functions;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Functions">DataOpentelekomcloudFgsFunctionsV2Functions</a>

---



