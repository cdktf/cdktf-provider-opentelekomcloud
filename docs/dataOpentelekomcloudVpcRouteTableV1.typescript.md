# `dataOpentelekomcloudVpcRouteTableV1` Submodule <a name="`dataOpentelekomcloudVpcRouteTableV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudVpcRouteTableV1 <a name="DataOpentelekomcloudVpcRouteTableV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/vpc_route_table_v1 opentelekomcloud_vpc_route_table_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.Initializer"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTableV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1(scope: Construct, id: string, config: DataOpentelekomcloudVpcRouteTableV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config">DataOpentelekomcloudVpcRouteTableV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config">DataOpentelekomcloudVpcRouteTableV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudVpcRouteTableV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.isConstruct"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTableV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTableV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTableV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTableV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudVpcRouteTableV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudVpcRouteTableV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudVpcRouteTableV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/vpc_route_table_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudVpcRouteTableV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.route">route</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList">DataOpentelekomcloudVpcRouteTableV1RouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.route"></a>

```typescript
public readonly route: DataOpentelekomcloudVpcRouteTableV1RouteList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList">DataOpentelekomcloudVpcRouteTableV1RouteList</a>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudVpcRouteTableV1Config <a name="DataOpentelekomcloudVpcRouteTableV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTableV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudVpcRouteTableV1Config: dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/vpc_route_table_v1#vpc_id DataOpentelekomcloudVpcRouteTableV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/vpc_route_table_v1#id DataOpentelekomcloudVpcRouteTableV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/vpc_route_table_v1#name DataOpentelekomcloudVpcRouteTableV1#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/vpc_route_table_v1#vpc_id DataOpentelekomcloudVpcRouteTableV1#vpc_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/vpc_route_table_v1#id DataOpentelekomcloudVpcRouteTableV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/vpc_route_table_v1#name DataOpentelekomcloudVpcRouteTableV1#name}.

---

### DataOpentelekomcloudVpcRouteTableV1Route <a name="DataOpentelekomcloudVpcRouteTableV1Route" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Route"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Route.Initializer"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTableV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudVpcRouteTableV1Route: dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Route = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudVpcRouteTableV1RouteList <a name="DataOpentelekomcloudVpcRouteTableV1RouteList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.Initializer"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTableV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudVpcRouteTableV1RouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudVpcRouteTableV1RouteOutputReference <a name="DataOpentelekomcloudVpcRouteTableV1RouteOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTableV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.property.nexthop">nexthop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Route">DataOpentelekomcloudVpcRouteTableV1Route</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.property.nexthop"></a>

```typescript
public readonly nexthop: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1RouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudVpcRouteTableV1Route;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTableV1.DataOpentelekomcloudVpcRouteTableV1Route">DataOpentelekomcloudVpcRouteTableV1Route</a>

---



