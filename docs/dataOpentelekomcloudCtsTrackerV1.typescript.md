# `dataOpentelekomcloudCtsTrackerV1` Submodule <a name="`dataOpentelekomcloudCtsTrackerV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCtsTrackerV1 <a name="DataOpentelekomcloudCtsTrackerV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.7/docs/data-sources/cts_tracker_v1 opentelekomcloud_cts_tracker_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.Initializer"></a>

```typescript
import { dataOpentelekomcloudCtsTrackerV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1(scope: Construct, id: string, config?: DataOpentelekomcloudCtsTrackerV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config">DataOpentelekomcloudCtsTrackerV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config">DataOpentelekomcloudCtsTrackerV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.resetTrackerName">resetTrackerName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTrackerName` <a name="resetTrackerName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.resetTrackerName"></a>

```typescript
public resetTrackerName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCtsTrackerV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.isConstruct"></a>

```typescript
import { dataOpentelekomcloudCtsTrackerV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudCtsTrackerV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudCtsTrackerV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudCtsTrackerV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudCtsTrackerV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudCtsTrackerV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudCtsTrackerV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.7/docs/data-sources/cts_tracker_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCtsTrackerV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.filePrefixName">filePrefixName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.isLtsEnabled">isLtsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.logTopicName">logTopicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.trackerNameInput">trackerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.trackerName">trackerName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `filePrefixName`<sup>Required</sup> <a name="filePrefixName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.filePrefixName"></a>

```typescript
public readonly filePrefixName: string;
```

- *Type:* string

---

##### `isLtsEnabled`<sup>Required</sup> <a name="isLtsEnabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.isLtsEnabled"></a>

```typescript
public readonly isLtsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `logTopicName`<sup>Required</sup> <a name="logTopicName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.logTopicName"></a>

```typescript
public readonly logTopicName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `trackerNameInput`<sup>Optional</sup> <a name="trackerNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.trackerNameInput"></a>

```typescript
public readonly trackerNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `trackerName`<sup>Required</sup> <a name="trackerName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.trackerName"></a>

```typescript
public readonly trackerName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCtsTrackerV1Config <a name="DataOpentelekomcloudCtsTrackerV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudCtsTrackerV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudCtsTrackerV1Config: dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.7/docs/data-sources/cts_tracker_v1#id DataOpentelekomcloudCtsTrackerV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.property.trackerName">trackerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.7/docs/data-sources/cts_tracker_v1#tracker_name DataOpentelekomcloudCtsTrackerV1#tracker_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.7/docs/data-sources/cts_tracker_v1#id DataOpentelekomcloudCtsTrackerV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `trackerName`<sup>Optional</sup> <a name="trackerName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCtsTrackerV1.DataOpentelekomcloudCtsTrackerV1Config.property.trackerName"></a>

```typescript
public readonly trackerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.7/docs/data-sources/cts_tracker_v1#tracker_name DataOpentelekomcloudCtsTrackerV1#tracker_name}.

---



