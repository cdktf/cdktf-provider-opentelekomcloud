# `dataOpentelekomcloudCceAddonTemplatesV3` Submodule <a name="`dataOpentelekomcloudCceAddonTemplatesV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCceAddonTemplatesV3 <a name="DataOpentelekomcloudCceAddonTemplatesV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/cce_addon_templates_v3 opentelekomcloud_cce_addon_templates_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer"></a>

```typescript
import { dataOpentelekomcloudCceAddonTemplatesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3(scope: Construct, id: string, config: DataOpentelekomcloudCceAddonTemplatesV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config">DataOpentelekomcloudCceAddonTemplatesV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config">DataOpentelekomcloudCceAddonTemplatesV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.resetClusterType">resetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetClusterType` <a name="resetClusterType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.resetClusterType"></a>

```typescript
public resetClusterType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCceAddonTemplatesV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isConstruct"></a>

```typescript
import { dataOpentelekomcloudCceAddonTemplatesV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudCceAddonTemplatesV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudCceAddonTemplatesV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudCceAddonTemplatesV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudCceAddonTemplatesV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudCceAddonTemplatesV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudCceAddonTemplatesV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/cce_addon_templates_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCceAddonTemplatesV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.addons">addons</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList">DataOpentelekomcloudCceAddonTemplatesV3AddonsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.addonNameInput">addonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.clusterTypeInput">clusterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.clusterVersionInput">clusterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.addonName">addonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `addons`<sup>Required</sup> <a name="addons" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.addons"></a>

```typescript
public readonly addons: DataOpentelekomcloudCceAddonTemplatesV3AddonsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList">DataOpentelekomcloudCceAddonTemplatesV3AddonsList</a>

---

##### `addonNameInput`<sup>Optional</sup> <a name="addonNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.addonNameInput"></a>

```typescript
public readonly addonNameInput: string;
```

- *Type:* string

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.clusterTypeInput"></a>

```typescript
public readonly clusterTypeInput: string;
```

- *Type:* string

---

##### `clusterVersionInput`<sup>Optional</sup> <a name="clusterVersionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.clusterVersionInput"></a>

```typescript
public readonly clusterVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `addonName`<sup>Required</sup> <a name="addonName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.addonName"></a>

```typescript
public readonly addonName: string;
```

- *Type:* string

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCceAddonTemplatesV3Addons <a name="DataOpentelekomcloudCceAddonTemplatesV3Addons" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Addons"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Addons.Initializer"></a>

```typescript
import { dataOpentelekomcloudCceAddonTemplatesV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudCceAddonTemplatesV3Addons: dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Addons = { ... }
```


### DataOpentelekomcloudCceAddonTemplatesV3Config <a name="DataOpentelekomcloudCceAddonTemplatesV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudCceAddonTemplatesV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudCceAddonTemplatesV3Config: dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.addonName">addonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/cce_addon_templates_v3#addon_name DataOpentelekomcloudCceAddonTemplatesV3#addon_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/cce_addon_templates_v3#cluster_version DataOpentelekomcloudCceAddonTemplatesV3#cluster_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.clusterType">clusterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/cce_addon_templates_v3#cluster_type DataOpentelekomcloudCceAddonTemplatesV3#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/cce_addon_templates_v3#id DataOpentelekomcloudCceAddonTemplatesV3#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addonName`<sup>Required</sup> <a name="addonName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.addonName"></a>

```typescript
public readonly addonName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/cce_addon_templates_v3#addon_name DataOpentelekomcloudCceAddonTemplatesV3#addon_name}.

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/cce_addon_templates_v3#cluster_version DataOpentelekomcloudCceAddonTemplatesV3#cluster_version}.

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/cce_addon_templates_v3#cluster_type DataOpentelekomcloudCceAddonTemplatesV3#cluster_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/cce_addon_templates_v3#id DataOpentelekomcloudCceAddonTemplatesV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCceAddonTemplatesV3AddonsList <a name="DataOpentelekomcloudCceAddonTemplatesV3AddonsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.Initializer"></a>

```typescript
import { dataOpentelekomcloudCceAddonTemplatesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference <a name="DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudCceAddonTemplatesV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.addonVersion">addonVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.clusterIp">clusterIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.eulerosVersion">eulerosVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.imageVersion">imageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.obsUrl">obsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.swrAddr">swrAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.swrUser">swrUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Addons">DataOpentelekomcloudCceAddonTemplatesV3Addons</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addonVersion`<sup>Required</sup> <a name="addonVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.addonVersion"></a>

```typescript
public readonly addonVersion: string;
```

- *Type:* string

---

##### `clusterIp`<sup>Required</sup> <a name="clusterIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.clusterIp"></a>

```typescript
public readonly clusterIp: string;
```

- *Type:* string

---

##### `eulerosVersion`<sup>Required</sup> <a name="eulerosVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.eulerosVersion"></a>

```typescript
public readonly eulerosVersion: string;
```

- *Type:* string

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string

---

##### `obsUrl`<sup>Required</sup> <a name="obsUrl" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.obsUrl"></a>

```typescript
public readonly obsUrl: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `swrAddr`<sup>Required</sup> <a name="swrAddr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.swrAddr"></a>

```typescript
public readonly swrAddr: string;
```

- *Type:* string

---

##### `swrUser`<sup>Required</sup> <a name="swrUser" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.swrUser"></a>

```typescript
public readonly swrUser: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudCceAddonTemplatesV3Addons;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Addons">DataOpentelekomcloudCceAddonTemplatesV3Addons</a>

---



