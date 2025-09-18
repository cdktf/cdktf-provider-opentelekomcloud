# `dataOpentelekomcloudPrivateNatTransitIpV3` Submodule <a name="`dataOpentelekomcloudPrivateNatTransitIpV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudPrivateNatTransitIpV3 <a name="DataOpentelekomcloudPrivateNatTransitIpV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/private_nat_transit_ip_v3 opentelekomcloud_private_nat_transit_ip_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatTransitIpV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3(scope: Construct, id: string, config?: DataOpentelekomcloudPrivateNatTransitIpV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config">DataOpentelekomcloudPrivateNatTransitIpV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config">DataOpentelekomcloudPrivateNatTransitIpV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.resetVirsubnetId">resetVirsubnetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetVirsubnetId` <a name="resetVirsubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.resetVirsubnetId"></a>

```typescript
public resetVirsubnetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudPrivateNatTransitIpV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isConstruct"></a>

```typescript
import { dataOpentelekomcloudPrivateNatTransitIpV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudPrivateNatTransitIpV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudPrivateNatTransitIpV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudPrivateNatTransitIpV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudPrivateNatTransitIpV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudPrivateNatTransitIpV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudPrivateNatTransitIpV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/private_nat_transit_ip_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudPrivateNatTransitIpV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.transitIps">transitIps</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList">DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.virsubnetIdInput">virsubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.virsubnetId">virsubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `transitIps`<sup>Required</sup> <a name="transitIps" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.transitIps"></a>

```typescript
public readonly transitIps: DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList">DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `virsubnetIdInput`<sup>Optional</sup> <a name="virsubnetIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.virsubnetIdInput"></a>

```typescript
public readonly virsubnetIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `virsubnetId`<sup>Required</sup> <a name="virsubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.virsubnetId"></a>

```typescript
public readonly virsubnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudPrivateNatTransitIpV3Config <a name="DataOpentelekomcloudPrivateNatTransitIpV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatTransitIpV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudPrivateNatTransitIpV3Config: dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/private_nat_transit_ip_v3#id DataOpentelekomcloudPrivateNatTransitIpV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/private_nat_transit_ip_v3#ip_address DataOpentelekomcloudPrivateNatTransitIpV3#ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.virsubnetId">virsubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/private_nat_transit_ip_v3#virsubnet_id DataOpentelekomcloudPrivateNatTransitIpV3#virsubnet_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/private_nat_transit_ip_v3#id DataOpentelekomcloudPrivateNatTransitIpV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/private_nat_transit_ip_v3#ip_address DataOpentelekomcloudPrivateNatTransitIpV3#ip_address}.

---

##### `virsubnetId`<sup>Optional</sup> <a name="virsubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3Config.property.virsubnetId"></a>

```typescript
public readonly virsubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/private_nat_transit_ip_v3#virsubnet_id DataOpentelekomcloudPrivateNatTransitIpV3#virsubnet_id}.

---

### DataOpentelekomcloudPrivateNatTransitIpV3TransitIps <a name="DataOpentelekomcloudPrivateNatTransitIpV3TransitIps" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIps.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatTransitIpV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudPrivateNatTransitIpV3TransitIps: dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIps = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList <a name="DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatTransitIpV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference <a name="DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatTransitIpV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.virsubnetId">virsubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIps">DataOpentelekomcloudPrivateNatTransitIpV3TransitIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `enterpriseProjectId`<sup>Required</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.enterpriseProjectId"></a>

```typescript
public readonly enterpriseProjectId: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `virsubnetId`<sup>Required</sup> <a name="virsubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.virsubnetId"></a>

```typescript
public readonly virsubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudPrivateNatTransitIpV3TransitIps;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatTransitIpV3.DataOpentelekomcloudPrivateNatTransitIpV3TransitIps">DataOpentelekomcloudPrivateNatTransitIpV3TransitIps</a>

---



