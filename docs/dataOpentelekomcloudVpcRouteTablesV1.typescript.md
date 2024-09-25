# `dataOpentelekomcloudVpcRouteTablesV1` Submodule <a name="`dataOpentelekomcloudVpcRouteTablesV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudVpcRouteTablesV1 <a name="DataOpentelekomcloudVpcRouteTablesV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_tables_v1 opentelekomcloud_vpc_route_tables_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.Initializer"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTablesV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1(scope: Construct, id: string, config?: DataOpentelekomcloudVpcRouteTablesV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config">DataOpentelekomcloudVpcRouteTablesV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config">DataOpentelekomcloudVpcRouteTablesV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudVpcRouteTablesV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isConstruct"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTablesV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTablesV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTablesV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTablesV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudVpcRouteTablesV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudVpcRouteTablesV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudVpcRouteTablesV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_tables_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudVpcRouteTablesV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.routetables">routetables</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList">DataOpentelekomcloudVpcRouteTablesV1RoutetablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `routetables`<sup>Required</sup> <a name="routetables" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.routetables"></a>

```typescript
public readonly routetables: DataOpentelekomcloudVpcRouteTablesV1RoutetablesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList">DataOpentelekomcloudVpcRouteTablesV1RoutetablesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudVpcRouteTablesV1Config <a name="DataOpentelekomcloudVpcRouteTablesV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTablesV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudVpcRouteTablesV1Config: dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_tables_v1#id DataOpentelekomcloudVpcRouteTablesV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_tables_v1#subnet_id DataOpentelekomcloudVpcRouteTablesV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_tables_v1#vpc_id DataOpentelekomcloudVpcRouteTablesV1#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_tables_v1#id DataOpentelekomcloudVpcRouteTablesV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_tables_v1#subnet_id DataOpentelekomcloudVpcRouteTablesV1#subnet_id}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/vpc_route_tables_v1#vpc_id DataOpentelekomcloudVpcRouteTablesV1#vpc_id}.

---

### DataOpentelekomcloudVpcRouteTablesV1Routetables <a name="DataOpentelekomcloudVpcRouteTablesV1Routetables" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Routetables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Routetables.Initializer"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTablesV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudVpcRouteTablesV1Routetables: dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Routetables = { ... }
```


### DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes <a name="DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes.Initializer"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTablesV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes: dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudVpcRouteTablesV1RoutetablesList <a name="DataOpentelekomcloudVpcRouteTablesV1RoutetablesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.Initializer"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTablesV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference <a name="DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTablesV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList">DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Routetables">DataOpentelekomcloudVpcRouteTablesV1Routetables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.routes"></a>

```typescript
public readonly routes: DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList">DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList</a>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudVpcRouteTablesV1Routetables;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Routetables">DataOpentelekomcloudVpcRouteTablesV1Routetables</a>

---


### DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList <a name="DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.Initializer"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTablesV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference <a name="DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudVpcRouteTablesV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.nexthop">nexthop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes">DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.nexthop"></a>

```typescript
public readonly nexthop: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes">DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes</a>

---



