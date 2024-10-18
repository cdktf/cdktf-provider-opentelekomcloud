# `dataOpentelekomcloudComputeInstanceV2` Submodule <a name="`dataOpentelekomcloudComputeInstanceV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudComputeInstanceV2 <a name="DataOpentelekomcloudComputeInstanceV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/compute_instance_v2 opentelekomcloud_compute_instance_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer"></a>

```typescript
import { dataOpentelekomcloudComputeInstanceV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2(scope: Construct, id: string, config?: DataOpentelekomcloudComputeInstanceV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config">DataOpentelekomcloudComputeInstanceV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config">DataOpentelekomcloudComputeInstanceV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetSshPrivateKeyPath">resetSshPrivateKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.putNetwork"></a>

```typescript
public putNetwork(value: IResolvable | DataOpentelekomcloudComputeInstanceV2Network[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.putNetwork.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSshPrivateKeyPath` <a name="resetSshPrivateKeyPath" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetSshPrivateKeyPath"></a>

```typescript
public resetSshPrivateKeyPath(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.resetUserData"></a>

```typescript
public resetUserData(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudComputeInstanceV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isConstruct"></a>

```typescript
import { dataOpentelekomcloudComputeInstanceV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudComputeInstanceV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudComputeInstanceV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudComputeInstanceV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudComputeInstanceV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudComputeInstanceV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudComputeInstanceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/compute_instance_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudComputeInstanceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.accessIpV4">accessIpV4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.accessIpV6">accessIpV6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.adminPass">adminPass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.encryptedPassword">encryptedPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.flavorId">flavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.flavorName">flavorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.keyPair">keyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.network">network</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList">DataOpentelekomcloudComputeInstanceV2NetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.powerState">powerState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.networkInput">networkInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.sshPrivateKeyPathInput">sshPrivateKeyPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.sshPrivateKeyPath">sshPrivateKeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.userData">userData</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessIpV4`<sup>Required</sup> <a name="accessIpV4" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.accessIpV4"></a>

```typescript
public readonly accessIpV4: string;
```

- *Type:* string

---

##### `accessIpV6`<sup>Required</sup> <a name="accessIpV6" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.accessIpV6"></a>

```typescript
public readonly accessIpV6: string;
```

- *Type:* string

---

##### `adminPass`<sup>Required</sup> <a name="adminPass" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.adminPass"></a>

```typescript
public readonly adminPass: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `encryptedPassword`<sup>Required</sup> <a name="encryptedPassword" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.encryptedPassword"></a>

```typescript
public readonly encryptedPassword: string;
```

- *Type:* string

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.flavorId"></a>

```typescript
public readonly flavorId: string;
```

- *Type:* string

---

##### `flavorName`<sup>Required</sup> <a name="flavorName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.flavorName"></a>

```typescript
public readonly flavorName: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.keyPair"></a>

```typescript
public readonly keyPair: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.network"></a>

```typescript
public readonly network: DataOpentelekomcloudComputeInstanceV2NetworkList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList">DataOpentelekomcloudComputeInstanceV2NetworkList</a>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `powerState`<sup>Required</sup> <a name="powerState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.powerState"></a>

```typescript
public readonly powerState: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.networkInput"></a>

```typescript
public readonly networkInput: IResolvable | DataOpentelekomcloudComputeInstanceV2Network[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sshPrivateKeyPathInput`<sup>Optional</sup> <a name="sshPrivateKeyPathInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.sshPrivateKeyPathInput"></a>

```typescript
public readonly sshPrivateKeyPathInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sshPrivateKeyPath`<sup>Required</sup> <a name="sshPrivateKeyPath" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.sshPrivateKeyPath"></a>

```typescript
public readonly sshPrivateKeyPath: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudComputeInstanceV2Config <a name="DataOpentelekomcloudComputeInstanceV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudComputeInstanceV2 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudComputeInstanceV2Config: dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/compute_instance_v2#id DataOpentelekomcloudComputeInstanceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/compute_instance_v2#name DataOpentelekomcloudComputeInstanceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.network">network</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>[]</code> | network block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/compute_instance_v2#region DataOpentelekomcloudComputeInstanceV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.sshPrivateKeyPath">sshPrivateKeyPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/compute_instance_v2#ssh_private_key_path DataOpentelekomcloudComputeInstanceV2#ssh_private_key_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/compute_instance_v2#tags DataOpentelekomcloudComputeInstanceV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.userData">userData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/compute_instance_v2#user_data DataOpentelekomcloudComputeInstanceV2#user_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/compute_instance_v2#id DataOpentelekomcloudComputeInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/compute_instance_v2#name DataOpentelekomcloudComputeInstanceV2#name}.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.network"></a>

```typescript
public readonly network: IResolvable | DataOpentelekomcloudComputeInstanceV2Network[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>[]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/compute_instance_v2#network DataOpentelekomcloudComputeInstanceV2#network}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/compute_instance_v2#region DataOpentelekomcloudComputeInstanceV2#region}.

---

##### `sshPrivateKeyPath`<sup>Optional</sup> <a name="sshPrivateKeyPath" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.sshPrivateKeyPath"></a>

```typescript
public readonly sshPrivateKeyPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/compute_instance_v2#ssh_private_key_path DataOpentelekomcloudComputeInstanceV2#ssh_private_key_path}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/compute_instance_v2#tags DataOpentelekomcloudComputeInstanceV2#tags}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Config.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/compute_instance_v2#user_data DataOpentelekomcloudComputeInstanceV2#user_data}.

---

### DataOpentelekomcloudComputeInstanceV2Network <a name="DataOpentelekomcloudComputeInstanceV2Network" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network.Initializer"></a>

```typescript
import { dataOpentelekomcloudComputeInstanceV2 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudComputeInstanceV2Network: dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudComputeInstanceV2NetworkList <a name="DataOpentelekomcloudComputeInstanceV2NetworkList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.Initializer"></a>

```typescript
import { dataOpentelekomcloudComputeInstanceV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudComputeInstanceV2NetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOpentelekomcloudComputeInstanceV2Network[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>[]

---


### DataOpentelekomcloudComputeInstanceV2NetworkOutputReference <a name="DataOpentelekomcloudComputeInstanceV2NetworkOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudComputeInstanceV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.fixedIpV4">fixedIpV4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.fixedIpV6">fixedIpV6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.mac">mac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedIpV4`<sup>Required</sup> <a name="fixedIpV4" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.fixedIpV4"></a>

```typescript
public readonly fixedIpV4: string;
```

- *Type:* string

---

##### `fixedIpV6`<sup>Required</sup> <a name="fixedIpV6" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.fixedIpV6"></a>

```typescript
public readonly fixedIpV6: string;
```

- *Type:* string

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.mac"></a>

```typescript
public readonly mac: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2NetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOpentelekomcloudComputeInstanceV2Network;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstanceV2.DataOpentelekomcloudComputeInstanceV2Network">DataOpentelekomcloudComputeInstanceV2Network</a>

---



