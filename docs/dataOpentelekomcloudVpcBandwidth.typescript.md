# `dataOpentelekomcloudVpcBandwidth` Submodule <a name="`dataOpentelekomcloudVpcBandwidth` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudVpcBandwidth <a name="DataOpentelekomcloudVpcBandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/data-sources/vpc_bandwidth opentelekomcloud_vpc_bandwidth}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.Initializer"></a>

```typescript
import { dataOpentelekomcloudVpcBandwidth } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth(scope: Construct, id: string, config: DataOpentelekomcloudVpcBandwidthConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig">DataOpentelekomcloudVpcBandwidthConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig">DataOpentelekomcloudVpcBandwidthConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.resetEnterpriseProjectId">resetEnterpriseProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.resetSize">resetSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEnterpriseProjectId` <a name="resetEnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.resetEnterpriseProjectId"></a>

```typescript
public resetEnterpriseProjectId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.resetSize"></a>

```typescript
public resetSize(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudVpcBandwidth resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.isConstruct"></a>

```typescript
import { dataOpentelekomcloudVpcBandwidth } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudVpcBandwidth } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudVpcBandwidth } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudVpcBandwidth } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudVpcBandwidth resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudVpcBandwidth to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudVpcBandwidth that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/data-sources/vpc_bandwidth#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudVpcBandwidth to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.bandwidthType">bandwidthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.chargeMode">chargeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.shareType">shareType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.enterpriseProjectIdInput">enterpriseProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.size">size</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `bandwidthType`<sup>Required</sup> <a name="bandwidthType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.bandwidthType"></a>

```typescript
public readonly bandwidthType: string;
```

- *Type:* string

---

##### `chargeMode`<sup>Required</sup> <a name="chargeMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.chargeMode"></a>

```typescript
public readonly chargeMode: string;
```

- *Type:* string

---

##### `shareType`<sup>Required</sup> <a name="shareType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.shareType"></a>

```typescript
public readonly shareType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `enterpriseProjectIdInput`<sup>Optional</sup> <a name="enterpriseProjectIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.enterpriseProjectIdInput"></a>

```typescript
public readonly enterpriseProjectIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `enterpriseProjectId`<sup>Required</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.enterpriseProjectId"></a>

```typescript
public readonly enterpriseProjectId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidth.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudVpcBandwidthConfig <a name="DataOpentelekomcloudVpcBandwidthConfig" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.Initializer"></a>

```typescript
import { dataOpentelekomcloudVpcBandwidth } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudVpcBandwidthConfig: dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/data-sources/vpc_bandwidth#name DataOpentelekomcloudVpcBandwidth#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/data-sources/vpc_bandwidth#enterprise_project_id DataOpentelekomcloudVpcBandwidth#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/data-sources/vpc_bandwidth#id DataOpentelekomcloudVpcBandwidth#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/data-sources/vpc_bandwidth#region DataOpentelekomcloudVpcBandwidth#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/data-sources/vpc_bandwidth#size DataOpentelekomcloudVpcBandwidth#size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/data-sources/vpc_bandwidth#name DataOpentelekomcloudVpcBandwidth#name}.

---

##### `enterpriseProjectId`<sup>Optional</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.enterpriseProjectId"></a>

```typescript
public readonly enterpriseProjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/data-sources/vpc_bandwidth#enterprise_project_id DataOpentelekomcloudVpcBandwidth#enterprise_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/data-sources/vpc_bandwidth#id DataOpentelekomcloudVpcBandwidth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/data-sources/vpc_bandwidth#region DataOpentelekomcloudVpcBandwidth#region}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcBandwidth.DataOpentelekomcloudVpcBandwidthConfig.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/data-sources/vpc_bandwidth#size DataOpentelekomcloudVpcBandwidth#size}.

---



