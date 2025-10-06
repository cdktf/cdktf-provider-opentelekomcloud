# `dataOpentelekomcloudAsmServiceMeshV1` Submodule <a name="`dataOpentelekomcloudAsmServiceMeshV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudAsmServiceMeshV1 <a name="DataOpentelekomcloudAsmServiceMeshV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/asm_service_mesh_v1 opentelekomcloud_asm_service_mesh_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer"></a>

```typescript
import { dataOpentelekomcloudAsmServiceMeshV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1(scope: Construct, id: string, config?: DataOpentelekomcloudAsmServiceMeshV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config">DataOpentelekomcloudAsmServiceMeshV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config">DataOpentelekomcloudAsmServiceMeshV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudAsmServiceMeshV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isConstruct"></a>

```typescript
import { dataOpentelekomcloudAsmServiceMeshV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudAsmServiceMeshV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudAsmServiceMeshV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudAsmServiceMeshV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudAsmServiceMeshV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudAsmServiceMeshV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudAsmServiceMeshV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/asm_service_mesh_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudAsmServiceMeshV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.serviceMeshes">serviceMeshes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `serviceMeshes`<sup>Required</sup> <a name="serviceMeshes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.serviceMeshes"></a>

```typescript
public readonly serviceMeshes: DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudAsmServiceMeshV1Config <a name="DataOpentelekomcloudAsmServiceMeshV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudAsmServiceMeshV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudAsmServiceMeshV1Config: dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/asm_service_mesh_v1#id DataOpentelekomcloudAsmServiceMeshV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/asm_service_mesh_v1#id DataOpentelekomcloudAsmServiceMeshV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes.Initializer"></a>

```typescript
import { dataOpentelekomcloudAsmServiceMeshV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudAsmServiceMeshV1ServiceMeshes: dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes = { ... }
```


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig.Initializer"></a>

```typescript
import { dataOpentelekomcloudAsmServiceMeshV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig: dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig = { ... }
```


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing.Initializer"></a>

```typescript
import { dataOpentelekomcloudAsmServiceMeshV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing: dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing = { ... }
```


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders.Initializer"></a>

```typescript
import { dataOpentelekomcloudAsmServiceMeshV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders: dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer"></a>

```typescript
import { dataOpentelekomcloudAsmServiceMeshV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudAsmServiceMeshV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.clusterIds">clusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.ipv6Enable">ipv6Enable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.telemetryConfigTracing">telemetryConfigTracing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterIds`<sup>Required</sup> <a name="clusterIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.clusterIds"></a>

```typescript
public readonly clusterIds: string[];
```

- *Type:* string[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipv6Enable`<sup>Required</sup> <a name="ipv6Enable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.ipv6Enable"></a>

```typescript
public readonly ipv6Enable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `proxyConfig`<sup>Required</sup> <a name="proxyConfig" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.proxyConfig"></a>

```typescript
public readonly proxyConfig: DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `telemetryConfigTracing`<sup>Required</sup> <a name="telemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.telemetryConfigTracing"></a>

```typescript
public readonly telemetryConfigTracing: DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes</a>

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer"></a>

```typescript
import { dataOpentelekomcloudAsmServiceMeshV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudAsmServiceMeshV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.excludeInboundPorts">excludeInboundPorts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.excludeIpRanges">excludeIpRanges</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.excludeOutboundPorts">excludeOutboundPorts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.includeInboundPorts">includeInboundPorts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.includeIpRanges">includeIpRanges</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.includeOutboundPorts">includeOutboundPorts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeInboundPorts`<sup>Required</sup> <a name="excludeInboundPorts" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.excludeInboundPorts"></a>

```typescript
public readonly excludeInboundPorts: string;
```

- *Type:* string

---

##### `excludeIpRanges`<sup>Required</sup> <a name="excludeIpRanges" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.excludeIpRanges"></a>

```typescript
public readonly excludeIpRanges: string;
```

- *Type:* string

---

##### `excludeOutboundPorts`<sup>Required</sup> <a name="excludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.excludeOutboundPorts"></a>

```typescript
public readonly excludeOutboundPorts: string;
```

- *Type:* string

---

##### `includeInboundPorts`<sup>Required</sup> <a name="includeInboundPorts" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.includeInboundPorts"></a>

```typescript
public readonly includeInboundPorts: string;
```

- *Type:* string

---

##### `includeIpRanges`<sup>Required</sup> <a name="includeIpRanges" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.includeIpRanges"></a>

```typescript
public readonly includeIpRanges: string;
```

- *Type:* string

---

##### `includeOutboundPorts`<sup>Required</sup> <a name="includeOutboundPorts" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.includeOutboundPorts"></a>

```typescript
public readonly includeOutboundPorts: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig</a>

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer"></a>

```typescript
import { dataOpentelekomcloudAsmServiceMeshV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudAsmServiceMeshV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddr">zipkinServiceAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePort">zipkinServicePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `zipkinServiceAddr`<sup>Required</sup> <a name="zipkinServiceAddr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddr"></a>

```typescript
public readonly zipkinServiceAddr: string;
```

- *Type:* string

---

##### `zipkinServicePort`<sup>Required</sup> <a name="zipkinServicePort" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePort"></a>

```typescript
public readonly zipkinServicePort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders</a>

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer"></a>

```typescript
import { dataOpentelekomcloudAsmServiceMeshV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudAsmServiceMeshV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.defaultProviders">defaultProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.extensionProviders">extensionProviders</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.randomSamplingPercentage">randomSamplingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultProviders`<sup>Required</sup> <a name="defaultProviders" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.defaultProviders"></a>

```typescript
public readonly defaultProviders: string[];
```

- *Type:* string[]

---

##### `extensionProviders`<sup>Required</sup> <a name="extensionProviders" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.extensionProviders"></a>

```typescript
public readonly extensionProviders: DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList</a>

---

##### `randomSamplingPercentage`<sup>Required</sup> <a name="randomSamplingPercentage" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.randomSamplingPercentage"></a>

```typescript
public readonly randomSamplingPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing</a>

---



