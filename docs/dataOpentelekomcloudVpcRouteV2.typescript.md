# `dataOpentelekomcloudVpcRouteV2` Submodule <a name="`dataOpentelekomcloudVpcRouteV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudVpcRouteV2 <a name="DataOpentelekomcloudVpcRouteV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_v2 opentelekomcloud_vpc_route_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.Initializer"></a>

```typescript
import { dataOpentelekomcloudVpcRouteV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2(scope: Construct, id: string, config?: DataOpentelekomcloudVpcRouteV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config">DataOpentelekomcloudVpcRouteV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config">DataOpentelekomcloudVpcRouteV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.resetNexthop">resetNexthop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNexthop` <a name="resetNexthop" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.resetNexthop"></a>

```typescript
public resetNexthop(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.resetType"></a>

```typescript
public resetType(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudVpcRouteV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.isConstruct"></a>

```typescript
import { dataOpentelekomcloudVpcRouteV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudVpcRouteV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudVpcRouteV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudVpcRouteV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudVpcRouteV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudVpcRouteV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudVpcRouteV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudVpcRouteV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.nexthopInput">nexthopInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.nexthop">nexthop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nexthopInput`<sup>Optional</sup> <a name="nexthopInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.nexthopInput"></a>

```typescript
public readonly nexthopInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.nexthop"></a>

```typescript
public readonly nexthop: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudVpcRouteV2Config <a name="DataOpentelekomcloudVpcRouteV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudVpcRouteV2 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudVpcRouteV2Config: dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_v2#destination DataOpentelekomcloudVpcRouteV2#destination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_v2#id DataOpentelekomcloudVpcRouteV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.nexthop">nexthop</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_v2#nexthop DataOpentelekomcloudVpcRouteV2#nexthop}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_v2#region DataOpentelekomcloudVpcRouteV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_v2#tenant_id DataOpentelekomcloudVpcRouteV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_v2#type DataOpentelekomcloudVpcRouteV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_v2#vpc_id DataOpentelekomcloudVpcRouteV2#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_v2#destination DataOpentelekomcloudVpcRouteV2#destination}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_v2#id DataOpentelekomcloudVpcRouteV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nexthop`<sup>Optional</sup> <a name="nexthop" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.nexthop"></a>

```typescript
public readonly nexthop: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_v2#nexthop DataOpentelekomcloudVpcRouteV2#nexthop}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_v2#region DataOpentelekomcloudVpcRouteV2#region}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_v2#tenant_id DataOpentelekomcloudVpcRouteV2#tenant_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_v2#type DataOpentelekomcloudVpcRouteV2#type}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteV2.DataOpentelekomcloudVpcRouteV2Config.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_v2#vpc_id DataOpentelekomcloudVpcRouteV2#vpc_id}.

---



