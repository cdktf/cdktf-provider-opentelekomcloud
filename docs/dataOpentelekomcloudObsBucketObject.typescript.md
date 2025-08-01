# `dataOpentelekomcloudObsBucketObject` Submodule <a name="`dataOpentelekomcloudObsBucketObject` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudObsBucketObject <a name="DataOpentelekomcloudObsBucketObject" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/obs_bucket_object opentelekomcloud_obs_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.Initializer"></a>

```typescript
import { dataOpentelekomcloudObsBucketObject } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject(scope: Construct, id: string, config: DataOpentelekomcloudObsBucketObjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig">DataOpentelekomcloudObsBucketObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig">DataOpentelekomcloudObsBucketObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.resetVersionId">resetVersionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.resetId"></a>

```typescript
public resetId(): void
```

##### `resetVersionId` <a name="resetVersionId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.resetVersionId"></a>

```typescript
public resetVersionId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudObsBucketObject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.isConstruct"></a>

```typescript
import { dataOpentelekomcloudObsBucketObject } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudObsBucketObject } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudObsBucketObject } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudObsBucketObject } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudObsBucketObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudObsBucketObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudObsBucketObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/obs_bucket_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudObsBucketObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.cacheControl">cacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.contentLength">contentLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.expires">expires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.websiteRedirectLocation">websiteRedirectLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

---

##### `contentLength`<sup>Required</sup> <a name="contentLength" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.contentLength"></a>

```typescript
public readonly contentLength: number;
```

- *Type:* number

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.expires"></a>

```typescript
public readonly expires: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `websiteRedirectLocation`<sup>Required</sup> <a name="websiteRedirectLocation" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.websiteRedirectLocation"></a>

```typescript
public readonly websiteRedirectLocation: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudObsBucketObjectConfig <a name="DataOpentelekomcloudObsBucketObjectConfig" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.Initializer"></a>

```typescript
import { dataOpentelekomcloudObsBucketObject } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudObsBucketObjectConfig: dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/obs_bucket_object#bucket DataOpentelekomcloudObsBucketObject#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/obs_bucket_object#key DataOpentelekomcloudObsBucketObject#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/obs_bucket_object#id DataOpentelekomcloudObsBucketObject#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.versionId">versionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/obs_bucket_object#version_id DataOpentelekomcloudObsBucketObject#version_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/obs_bucket_object#bucket DataOpentelekomcloudObsBucketObject#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/obs_bucket_object#key DataOpentelekomcloudObsBucketObject#key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/obs_bucket_object#id DataOpentelekomcloudObsBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudObsBucketObject.DataOpentelekomcloudObsBucketObjectConfig.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/obs_bucket_object#version_id DataOpentelekomcloudObsBucketObject#version_id}.

---



