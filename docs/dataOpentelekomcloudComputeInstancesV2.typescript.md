# `dataOpentelekomcloudComputeInstancesV2` Submodule <a name="`dataOpentelekomcloudComputeInstancesV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudComputeInstancesV2 <a name="DataOpentelekomcloudComputeInstancesV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2 opentelekomcloud_compute_instances_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer"></a>

```typescript
import { dataOpentelekomcloudComputeInstancesV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2(scope: Construct, id: string, config?: DataOpentelekomcloudComputeInstancesV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config">DataOpentelekomcloudComputeInstancesV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config">DataOpentelekomcloudComputeInstancesV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetFlavorId">resetFlavorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetFlavorName">resetFlavorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetKeyPair">resetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetFlavorId` <a name="resetFlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetFlavorId"></a>

```typescript
public resetFlavorId(): void
```

##### `resetFlavorName` <a name="resetFlavorName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetFlavorName"></a>

```typescript
public resetFlavorName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageId` <a name="resetImageId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetImageId"></a>

```typescript
public resetImageId(): void
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetInstanceId"></a>

```typescript
public resetInstanceId(): void
```

##### `resetKeyPair` <a name="resetKeyPair" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetKeyPair"></a>

```typescript
public resetKeyPair(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudComputeInstancesV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isConstruct"></a>

```typescript
import { dataOpentelekomcloudComputeInstancesV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudComputeInstancesV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudComputeInstancesV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudComputeInstancesV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudComputeInstancesV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudComputeInstancesV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudComputeInstancesV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudComputeInstancesV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList">DataOpentelekomcloudComputeInstancesV2InstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorIdInput">flavorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorNameInput">flavorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.keyPairInput">keyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorId">flavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorName">flavorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.keyPair">keyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.instances"></a>

```typescript
public readonly instances: DataOpentelekomcloudComputeInstancesV2InstancesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList">DataOpentelekomcloudComputeInstancesV2InstancesList</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `flavorIdInput`<sup>Optional</sup> <a name="flavorIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorIdInput"></a>

```typescript
public readonly flavorIdInput: string;
```

- *Type:* string

---

##### `flavorNameInput`<sup>Optional</sup> <a name="flavorNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorNameInput"></a>

```typescript
public readonly flavorNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `keyPairInput`<sup>Optional</sup> <a name="keyPairInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.keyPairInput"></a>

```typescript
public readonly keyPairInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorId"></a>

```typescript
public readonly flavorId: string;
```

- *Type:* string

---

##### `flavorName`<sup>Required</sup> <a name="flavorName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorName"></a>

```typescript
public readonly flavorName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.keyPair"></a>

```typescript
public readonly keyPair: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudComputeInstancesV2Config <a name="DataOpentelekomcloudComputeInstancesV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudComputeInstancesV2 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudComputeInstancesV2Config: dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#availability_zone DataOpentelekomcloudComputeInstancesV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.flavorId">flavorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#flavor_id DataOpentelekomcloudComputeInstancesV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.flavorName">flavorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#flavor_name DataOpentelekomcloudComputeInstancesV2#flavor_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#id DataOpentelekomcloudComputeInstancesV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#image_id DataOpentelekomcloudComputeInstancesV2#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#instance_id DataOpentelekomcloudComputeInstancesV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.keyPair">keyPair</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#key_pair DataOpentelekomcloudComputeInstancesV2#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.limit">limit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#limit DataOpentelekomcloudComputeInstancesV2#limit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#name DataOpentelekomcloudComputeInstancesV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#project_id DataOpentelekomcloudComputeInstancesV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#status DataOpentelekomcloudComputeInstancesV2#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#availability_zone DataOpentelekomcloudComputeInstancesV2#availability_zone}.

---

##### `flavorId`<sup>Optional</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.flavorId"></a>

```typescript
public readonly flavorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#flavor_id DataOpentelekomcloudComputeInstancesV2#flavor_id}.

---

##### `flavorName`<sup>Optional</sup> <a name="flavorName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.flavorName"></a>

```typescript
public readonly flavorName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#flavor_name DataOpentelekomcloudComputeInstancesV2#flavor_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#id DataOpentelekomcloudComputeInstancesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#image_id DataOpentelekomcloudComputeInstancesV2#image_id}.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#instance_id DataOpentelekomcloudComputeInstancesV2#instance_id}.

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.keyPair"></a>

```typescript
public readonly keyPair: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#key_pair DataOpentelekomcloudComputeInstancesV2#key_pair}.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#limit DataOpentelekomcloudComputeInstancesV2#limit}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#name DataOpentelekomcloudComputeInstancesV2#name}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#project_id DataOpentelekomcloudComputeInstancesV2#project_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/data-sources/compute_instances_v2#status DataOpentelekomcloudComputeInstancesV2#status}.

---

### DataOpentelekomcloudComputeInstancesV2Instances <a name="DataOpentelekomcloudComputeInstancesV2Instances" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Instances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Instances.Initializer"></a>

```typescript
import { dataOpentelekomcloudComputeInstancesV2 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudComputeInstancesV2Instances: dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Instances = { ... }
```


### DataOpentelekomcloudComputeInstancesV2InstancesNetwork <a name="DataOpentelekomcloudComputeInstancesV2InstancesNetwork" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetwork.Initializer"></a>

```typescript
import { dataOpentelekomcloudComputeInstancesV2 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudComputeInstancesV2InstancesNetwork: dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetwork = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudComputeInstancesV2InstancesList <a name="DataOpentelekomcloudComputeInstancesV2InstancesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer"></a>

```typescript
import { dataOpentelekomcloudComputeInstancesV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudComputeInstancesV2InstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudComputeInstancesV2InstancesNetworkList <a name="DataOpentelekomcloudComputeInstancesV2InstancesNetworkList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer"></a>

```typescript
import { dataOpentelekomcloudComputeInstancesV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference <a name="DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudComputeInstancesV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.fixedIpV4">fixedIpV4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.fixedIpV6">fixedIpV6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.mac">mac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetwork">DataOpentelekomcloudComputeInstancesV2InstancesNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedIpV4`<sup>Required</sup> <a name="fixedIpV4" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.fixedIpV4"></a>

```typescript
public readonly fixedIpV4: string;
```

- *Type:* string

---

##### `fixedIpV6`<sup>Required</sup> <a name="fixedIpV6" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.fixedIpV6"></a>

```typescript
public readonly fixedIpV6: string;
```

- *Type:* string

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.mac"></a>

```typescript
public readonly mac: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudComputeInstancesV2InstancesNetwork;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetwork">DataOpentelekomcloudComputeInstancesV2InstancesNetwork</a>

---


### DataOpentelekomcloudComputeInstancesV2InstancesOutputReference <a name="DataOpentelekomcloudComputeInstancesV2InstancesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudComputeInstancesV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.flavorId">flavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.keyPair">keyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.network">network</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList">DataOpentelekomcloudComputeInstancesV2InstancesNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.publicIp">publicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.securityGroupsIds">securityGroupsIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.systemDiskId">systemDiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Instances">DataOpentelekomcloudComputeInstancesV2Instances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.flavorId"></a>

```typescript
public readonly flavorId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.keyPair"></a>

```typescript
public readonly keyPair: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.network"></a>

```typescript
public readonly network: DataOpentelekomcloudComputeInstancesV2InstancesNetworkList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList">DataOpentelekomcloudComputeInstancesV2InstancesNetworkList</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.publicIp"></a>

```typescript
public readonly publicIp: string;
```

- *Type:* string

---

##### `securityGroupsIds`<sup>Required</sup> <a name="securityGroupsIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.securityGroupsIds"></a>

```typescript
public readonly securityGroupsIds: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemDiskId`<sup>Required</sup> <a name="systemDiskId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.systemDiskId"></a>

```typescript
public readonly systemDiskId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudComputeInstancesV2Instances;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Instances">DataOpentelekomcloudComputeInstancesV2Instances</a>

---



