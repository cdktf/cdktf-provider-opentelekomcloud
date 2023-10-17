# `data_opentelekomcloud_dms_product_v1`

Refer to the Terraform Registory for docs: [`data_opentelekomcloud_dms_product_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1).

# `dataOpentelekomcloudDmsProductV1` Submodule <a name="`dataOpentelekomcloudDmsProductV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudDmsProductV1 <a name="DataOpentelekomcloudDmsProductV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1 opentelekomcloud_dms_product_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.Initializer"></a>

```typescript
import { dataOpentelekomcloudDmsProductV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1(scope: Construct, id: string, config: DataOpentelekomcloudDmsProductV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config">DataOpentelekomcloudDmsProductV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config">DataOpentelekomcloudDmsProductV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetBandwidth">resetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetIoType">resetIoType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetNodeNum">resetNodeNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetPartitionNum">resetPartitionNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetStorageSpecCode">resetStorageSpecCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetVmSpecification">resetVmSpecification</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBandwidth` <a name="resetBandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetBandwidth"></a>

```typescript
public resetBandwidth(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIoType` <a name="resetIoType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetIoType"></a>

```typescript
public resetIoType(): void
```

##### `resetNodeNum` <a name="resetNodeNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetNodeNum"></a>

```typescript
public resetNodeNum(): void
```

##### `resetPartitionNum` <a name="resetPartitionNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetPartitionNum"></a>

```typescript
public resetPartitionNum(): void
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetStorage"></a>

```typescript
public resetStorage(): void
```

##### `resetStorageSpecCode` <a name="resetStorageSpecCode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetStorageSpecCode"></a>

```typescript
public resetStorageSpecCode(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetVersion"></a>

```typescript
public resetVersion(): void
```

##### `resetVmSpecification` <a name="resetVmSpecification" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetVmSpecification"></a>

```typescript
public resetVmSpecification(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudDmsProductV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isConstruct"></a>

```typescript
import { dataOpentelekomcloudDmsProductV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudDmsProductV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudDmsProductV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudDmsProductV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudDmsProductV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudDmsProductV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudDmsProductV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudDmsProductV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.bandwidthInput">bandwidthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.ioTypeInput">ioTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.nodeNumInput">nodeNumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.partitionNumInput">partitionNumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.storageInput">storageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.storageSpecCodeInput">storageSpecCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.vmSpecificationInput">vmSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.bandwidth">bandwidth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.ioType">ioType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.nodeNum">nodeNum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.partitionNum">partitionNum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.storage">storage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.storageSpecCode">storageSpecCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.vmSpecification">vmSpecification</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.bandwidthInput"></a>

```typescript
public readonly bandwidthInput: string;
```

- *Type:* string

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `ioTypeInput`<sup>Optional</sup> <a name="ioTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.ioTypeInput"></a>

```typescript
public readonly ioTypeInput: string;
```

- *Type:* string

---

##### `nodeNumInput`<sup>Optional</sup> <a name="nodeNumInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.nodeNumInput"></a>

```typescript
public readonly nodeNumInput: string;
```

- *Type:* string

---

##### `partitionNumInput`<sup>Optional</sup> <a name="partitionNumInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.partitionNumInput"></a>

```typescript
public readonly partitionNumInput: string;
```

- *Type:* string

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.storageInput"></a>

```typescript
public readonly storageInput: string;
```

- *Type:* string

---

##### `storageSpecCodeInput`<sup>Optional</sup> <a name="storageSpecCodeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.storageSpecCodeInput"></a>

```typescript
public readonly storageSpecCodeInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `vmSpecificationInput`<sup>Optional</sup> <a name="vmSpecificationInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.vmSpecificationInput"></a>

```typescript
public readonly vmSpecificationInput: string;
```

- *Type:* string

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.bandwidth"></a>

```typescript
public readonly bandwidth: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `ioType`<sup>Required</sup> <a name="ioType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.ioType"></a>

```typescript
public readonly ioType: string;
```

- *Type:* string

---

##### `nodeNum`<sup>Required</sup> <a name="nodeNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.nodeNum"></a>

```typescript
public readonly nodeNum: string;
```

- *Type:* string

---

##### `partitionNum`<sup>Required</sup> <a name="partitionNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.partitionNum"></a>

```typescript
public readonly partitionNum: string;
```

- *Type:* string

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.storage"></a>

```typescript
public readonly storage: string;
```

- *Type:* string

---

##### `storageSpecCode`<sup>Required</sup> <a name="storageSpecCode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.storageSpecCode"></a>

```typescript
public readonly storageSpecCode: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `vmSpecification`<sup>Required</sup> <a name="vmSpecification" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.vmSpecification"></a>

```typescript
public readonly vmSpecification: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudDmsProductV1Config <a name="DataOpentelekomcloudDmsProductV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudDmsProductV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudDmsProductV1Config: dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#engine DataOpentelekomcloudDmsProductV1#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#instance_type DataOpentelekomcloudDmsProductV1#instance_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.bandwidth">bandwidth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#bandwidth DataOpentelekomcloudDmsProductV1#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#id DataOpentelekomcloudDmsProductV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.ioType">ioType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#io_type DataOpentelekomcloudDmsProductV1#io_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.nodeNum">nodeNum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#node_num DataOpentelekomcloudDmsProductV1#node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.partitionNum">partitionNum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#partition_num DataOpentelekomcloudDmsProductV1#partition_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.storage">storage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#storage DataOpentelekomcloudDmsProductV1#storage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.storageSpecCode">storageSpecCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#storage_spec_code DataOpentelekomcloudDmsProductV1#storage_spec_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#version DataOpentelekomcloudDmsProductV1#version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.vmSpecification">vmSpecification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#vm_specification DataOpentelekomcloudDmsProductV1#vm_specification}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#engine DataOpentelekomcloudDmsProductV1#engine}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#instance_type DataOpentelekomcloudDmsProductV1#instance_type}.

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.bandwidth"></a>

```typescript
public readonly bandwidth: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#bandwidth DataOpentelekomcloudDmsProductV1#bandwidth}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#id DataOpentelekomcloudDmsProductV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ioType`<sup>Optional</sup> <a name="ioType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.ioType"></a>

```typescript
public readonly ioType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#io_type DataOpentelekomcloudDmsProductV1#io_type}.

---

##### `nodeNum`<sup>Optional</sup> <a name="nodeNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.nodeNum"></a>

```typescript
public readonly nodeNum: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#node_num DataOpentelekomcloudDmsProductV1#node_num}.

---

##### `partitionNum`<sup>Optional</sup> <a name="partitionNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.partitionNum"></a>

```typescript
public readonly partitionNum: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#partition_num DataOpentelekomcloudDmsProductV1#partition_num}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.storage"></a>

```typescript
public readonly storage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#storage DataOpentelekomcloudDmsProductV1#storage}.

---

##### `storageSpecCode`<sup>Optional</sup> <a name="storageSpecCode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.storageSpecCode"></a>

```typescript
public readonly storageSpecCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#storage_spec_code DataOpentelekomcloudDmsProductV1#storage_spec_code}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#version DataOpentelekomcloudDmsProductV1#version}.

---

##### `vmSpecification`<sup>Optional</sup> <a name="vmSpecification" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.vmSpecification"></a>

```typescript
public readonly vmSpecification: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/data-sources/dms_product_v1#vm_specification DataOpentelekomcloudDmsProductV1#vm_specification}.

---



