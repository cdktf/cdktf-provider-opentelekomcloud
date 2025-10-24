# `dataOpentelekomcloudErRouteTablesV3` Submodule <a name="`dataOpentelekomcloudErRouteTablesV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudErRouteTablesV3 <a name="DataOpentelekomcloudErRouteTablesV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3 opentelekomcloud_er_route_tables_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3(scope: Construct, id: string, config: DataOpentelekomcloudErRouteTablesV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config">DataOpentelekomcloudErRouteTablesV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config">DataOpentelekomcloudErRouteTablesV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetRouteTableId">resetRouteTableId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRouteTableId` <a name="resetRouteTableId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetRouteTableId"></a>

```typescript
public resetRouteTableId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudErRouteTablesV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isConstruct"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudErRouteTablesV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudErRouteTablesV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudErRouteTablesV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudErRouteTablesV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.routeTables">routeTables</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList">DataOpentelekomcloudErRouteTablesV3RouteTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.routeTableIdInput">routeTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.routeTableId">routeTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `routeTables`<sup>Required</sup> <a name="routeTables" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.routeTables"></a>

```typescript
public readonly routeTables: DataOpentelekomcloudErRouteTablesV3RouteTablesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList">DataOpentelekomcloudErRouteTablesV3RouteTablesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `routeTableIdInput`<sup>Optional</sup> <a name="routeTableIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.routeTableIdInput"></a>

```typescript
public readonly routeTableIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.routeTableId"></a>

```typescript
public readonly routeTableId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudErRouteTablesV3Config <a name="DataOpentelekomcloudErRouteTablesV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudErRouteTablesV3Config: dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#instance_id DataOpentelekomcloudErRouteTablesV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#id DataOpentelekomcloudErRouteTablesV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#name DataOpentelekomcloudErRouteTablesV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.routeTableId">routeTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#route_table_id DataOpentelekomcloudErRouteTablesV3#route_table_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#tags DataOpentelekomcloudErRouteTablesV3#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#instance_id DataOpentelekomcloudErRouteTablesV3#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#id DataOpentelekomcloudErRouteTablesV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#name DataOpentelekomcloudErRouteTablesV3#name}.

---

##### `routeTableId`<sup>Optional</sup> <a name="routeTableId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.routeTableId"></a>

```typescript
public readonly routeTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#route_table_id DataOpentelekomcloudErRouteTablesV3#route_table_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/er_route_tables_v3#tags DataOpentelekomcloudErRouteTablesV3#tags}.

---

### DataOpentelekomcloudErRouteTablesV3RouteTables <a name="DataOpentelekomcloudErRouteTablesV3RouteTables" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTables.Initializer"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudErRouteTablesV3RouteTables: dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTables = { ... }
```


### DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations.Initializer"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudErRouteTablesV3RouteTablesAssociations: dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations = { ... }
```


### DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations.Initializer"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudErRouteTablesV3RouteTablesPropagations: dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations = { ... }
```


### DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes.Initializer"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudErRouteTablesV3RouteTablesRoutes: dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes = { ... }
```


### DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments.Initializer"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments: dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.attachmentId">attachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.attachmentType">attachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations">DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.attachmentType"></a>

```typescript
public readonly attachmentType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations">DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations</a>

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesList <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.associations">associations</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList">DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.propagations">propagations</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList">DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTables">DataOpentelekomcloudErRouteTablesV3RouteTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `associations`<sup>Required</sup> <a name="associations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.associations"></a>

```typescript
public readonly associations: DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList">DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `propagations`<sup>Required</sup> <a name="propagations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.propagations"></a>

```typescript
public readonly propagations: DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList">DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList</a>

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.routes"></a>

```typescript
public readonly routes: DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudErRouteTablesV3RouteTables;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTables">DataOpentelekomcloudErRouteTablesV3RouteTables</a>

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.attachmentId">attachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.attachmentType">attachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations">DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.attachmentType"></a>

```typescript
public readonly attachmentType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations">DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations</a>

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.attachmentId">attachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.attachmentType">attachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.attachmentType"></a>

```typescript
public readonly attachmentType: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments</a>

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudErRouteTablesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.attachments">attachments</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.isBlackhole">isBlackhole</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.attachments"></a>

```typescript
public readonly attachments: DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList</a>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isBlackhole`<sup>Required</sup> <a name="isBlackhole" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.isBlackhole"></a>

```typescript
public readonly isBlackhole: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes</a>

---



