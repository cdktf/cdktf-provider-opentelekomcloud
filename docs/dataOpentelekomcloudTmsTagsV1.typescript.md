# `dataOpentelekomcloudTmsTagsV1` Submodule <a name="`dataOpentelekomcloudTmsTagsV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudTmsTagsV1 <a name="DataOpentelekomcloudTmsTagsV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/tms_tags_v1 opentelekomcloud_tms_tags_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.Initializer"></a>

```typescript
import { dataOpentelekomcloudTmsTagsV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1(scope: Construct, id: string, config?: DataOpentelekomcloudTmsTagsV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config">DataOpentelekomcloudTmsTagsV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config">DataOpentelekomcloudTmsTagsV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.resetValue">resetValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.resetValue"></a>

```typescript
public resetValue(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudTmsTagsV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.isConstruct"></a>

```typescript
import { dataOpentelekomcloudTmsTagsV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudTmsTagsV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudTmsTagsV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudTmsTagsV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudTmsTagsV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudTmsTagsV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudTmsTagsV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/tms_tags_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudTmsTagsV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList">DataOpentelekomcloudTmsTagsV1TagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.tags"></a>

```typescript
public readonly tags: DataOpentelekomcloudTmsTagsV1TagsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList">DataOpentelekomcloudTmsTagsV1TagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudTmsTagsV1Config <a name="DataOpentelekomcloudTmsTagsV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudTmsTagsV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudTmsTagsV1Config: dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/tms_tags_v1#id DataOpentelekomcloudTmsTagsV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/tms_tags_v1#key DataOpentelekomcloudTmsTagsV1#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/tms_tags_v1#value DataOpentelekomcloudTmsTagsV1#value}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/tms_tags_v1#id DataOpentelekomcloudTmsTagsV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/tms_tags_v1#key DataOpentelekomcloudTmsTagsV1#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Config.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/tms_tags_v1#value DataOpentelekomcloudTmsTagsV1#value}.

---

### DataOpentelekomcloudTmsTagsV1Tags <a name="DataOpentelekomcloudTmsTagsV1Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Tags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Tags.Initializer"></a>

```typescript
import { dataOpentelekomcloudTmsTagsV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudTmsTagsV1Tags: dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Tags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudTmsTagsV1TagsList <a name="DataOpentelekomcloudTmsTagsV1TagsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.Initializer"></a>

```typescript
import { dataOpentelekomcloudTmsTagsV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudTmsTagsV1TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudTmsTagsV1TagsOutputReference <a name="DataOpentelekomcloudTmsTagsV1TagsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudTmsTagsV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Tags">DataOpentelekomcloudTmsTagsV1Tags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1TagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudTmsTagsV1Tags;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsTagsV1.DataOpentelekomcloudTmsTagsV1Tags">DataOpentelekomcloudTmsTagsV1Tags</a>

---



