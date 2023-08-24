# `data_opentelekomcloud_cbr_backup_ids_v3`

Refer to the Terraform Registory for docs: [`data_opentelekomcloud_cbr_backup_ids_v3`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3).

# `dataOpentelekomcloudCbrBackupIdsV3` Submodule <a name="`dataOpentelekomcloudCbrBackupIdsV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCbrBackupIdsV3 <a name="DataOpentelekomcloudCbrBackupIdsV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3 opentelekomcloud_cbr_backup_ids_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.Initializer"></a>

```typescript
import { dataOpentelekomcloudCbrBackupIdsV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3(scope: Construct, id: string, config?: DataOpentelekomcloudCbrBackupIdsV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config">DataOpentelekomcloudCbrBackupIdsV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config">DataOpentelekomcloudCbrBackupIdsV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetCheckpointId">resetCheckpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetImageType">resetImageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetParentId">resetParentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetResourceAz">resetResourceAz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetResourceName">resetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetVaultId">resetVaultId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCheckpointId` <a name="resetCheckpointId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetCheckpointId"></a>

```typescript
public resetCheckpointId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageType` <a name="resetImageType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetImageType"></a>

```typescript
public resetImageType(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParentId` <a name="resetParentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetParentId"></a>

```typescript
public resetParentId(): void
```

##### `resetResourceAz` <a name="resetResourceAz" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetResourceAz"></a>

```typescript
public resetResourceAz(): void
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

##### `resetResourceName` <a name="resetResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetResourceName"></a>

```typescript
public resetResourceName(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetVaultId` <a name="resetVaultId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.resetVaultId"></a>

```typescript
public resetVaultId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isConstruct"></a>

```typescript
import { dataOpentelekomcloudCbrBackupIdsV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudCbrBackupIdsV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudCbrBackupIdsV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.checkpointIdInput">checkpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.imageTypeInput">imageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceAzInput">resourceAzInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceNameInput">resourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.vaultIdInput">vaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.checkpointId">checkpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.imageType">imageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceAz">resourceAz</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `checkpointIdInput`<sup>Optional</sup> <a name="checkpointIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.checkpointIdInput"></a>

```typescript
public readonly checkpointIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageTypeInput`<sup>Optional</sup> <a name="imageTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.imageTypeInput"></a>

```typescript
public readonly imageTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `resourceAzInput`<sup>Optional</sup> <a name="resourceAzInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceAzInput"></a>

```typescript
public readonly resourceAzInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceNameInput"></a>

```typescript
public readonly resourceNameInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.vaultIdInput"></a>

```typescript
public readonly vaultIdInput: string;
```

- *Type:* string

---

##### `checkpointId`<sup>Required</sup> <a name="checkpointId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.checkpointId"></a>

```typescript
public readonly checkpointId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `resourceAz`<sup>Required</sup> <a name="resourceAz" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceAz"></a>

```typescript
public readonly resourceAz: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCbrBackupIdsV3Config <a name="DataOpentelekomcloudCbrBackupIdsV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudCbrBackupIdsV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudCbrBackupIdsV3Config: dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.checkpointId">checkpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#checkpoint_id DataOpentelekomcloudCbrBackupIdsV3#checkpoint_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#id DataOpentelekomcloudCbrBackupIdsV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.imageType">imageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#image_type DataOpentelekomcloudCbrBackupIdsV3#image_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#name DataOpentelekomcloudCbrBackupIdsV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.parentId">parentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#parent_id DataOpentelekomcloudCbrBackupIdsV3#parent_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.resourceAz">resourceAz</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#resource_az DataOpentelekomcloudCbrBackupIdsV3#resource_az}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#resource_id DataOpentelekomcloudCbrBackupIdsV3#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.resourceName">resourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#resource_name DataOpentelekomcloudCbrBackupIdsV3#resource_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#resource_type DataOpentelekomcloudCbrBackupIdsV3#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#status DataOpentelekomcloudCbrBackupIdsV3#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.vaultId">vaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#vault_id DataOpentelekomcloudCbrBackupIdsV3#vault_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `checkpointId`<sup>Optional</sup> <a name="checkpointId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.checkpointId"></a>

```typescript
public readonly checkpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#checkpoint_id DataOpentelekomcloudCbrBackupIdsV3#checkpoint_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#id DataOpentelekomcloudCbrBackupIdsV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageType`<sup>Optional</sup> <a name="imageType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#image_type DataOpentelekomcloudCbrBackupIdsV3#image_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#name DataOpentelekomcloudCbrBackupIdsV3#name}.

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#parent_id DataOpentelekomcloudCbrBackupIdsV3#parent_id}.

---

##### `resourceAz`<sup>Optional</sup> <a name="resourceAz" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.resourceAz"></a>

```typescript
public readonly resourceAz: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#resource_az DataOpentelekomcloudCbrBackupIdsV3#resource_az}.

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#resource_id DataOpentelekomcloudCbrBackupIdsV3#resource_id}.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#resource_name DataOpentelekomcloudCbrBackupIdsV3#resource_name}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#resource_type DataOpentelekomcloudCbrBackupIdsV3#resource_type}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#status DataOpentelekomcloudCbrBackupIdsV3#status}.

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupIdsV3.DataOpentelekomcloudCbrBackupIdsV3Config.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/data-sources/cbr_backup_ids_v3#vault_id DataOpentelekomcloudCbrBackupIdsV3#vault_id}.

---



