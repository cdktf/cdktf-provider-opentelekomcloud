# `dataOpentelekomcloudRtsStackResourceV1` Submodule <a name="`dataOpentelekomcloudRtsStackResourceV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudRtsStackResourceV1 <a name="DataOpentelekomcloudRtsStackResourceV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rts_stack_resource_v1 opentelekomcloud_rts_stack_resource_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer"></a>

```typescript
import { dataOpentelekomcloudRtsStackResourceV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1(scope: Construct, id: string, config: DataOpentelekomcloudRtsStackResourceV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config">DataOpentelekomcloudRtsStackResourceV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config">DataOpentelekomcloudRtsStackResourceV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetPhysicalResourceId">resetPhysicalResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetResourceName">resetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPhysicalResourceId` <a name="resetPhysicalResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetPhysicalResourceId"></a>

```typescript
public resetPhysicalResourceId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetResourceName` <a name="resetResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetResourceName"></a>

```typescript
public resetResourceName(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudRtsStackResourceV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isConstruct"></a>

```typescript
import { dataOpentelekomcloudRtsStackResourceV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudRtsStackResourceV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudRtsStackResourceV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudRtsStackResourceV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudRtsStackResourceV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudRtsStackResourceV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudRtsStackResourceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rts_stack_resource_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudRtsStackResourceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.logicalResourceId">logicalResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.requiredBy">requiredBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceStatus">resourceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceStatusReason">resourceStatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.physicalResourceIdInput">physicalResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceNameInput">resourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.stackNameInput">stackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.physicalResourceId">physicalResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.stackName">stackName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `logicalResourceId`<sup>Required</sup> <a name="logicalResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.logicalResourceId"></a>

```typescript
public readonly logicalResourceId: string;
```

- *Type:* string

---

##### `requiredBy`<sup>Required</sup> <a name="requiredBy" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.requiredBy"></a>

```typescript
public readonly requiredBy: string[];
```

- *Type:* string[]

---

##### `resourceStatus`<sup>Required</sup> <a name="resourceStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceStatus"></a>

```typescript
public readonly resourceStatus: string;
```

- *Type:* string

---

##### `resourceStatusReason`<sup>Required</sup> <a name="resourceStatusReason" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceStatusReason"></a>

```typescript
public readonly resourceStatusReason: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `physicalResourceIdInput`<sup>Optional</sup> <a name="physicalResourceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.physicalResourceIdInput"></a>

```typescript
public readonly physicalResourceIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceNameInput"></a>

```typescript
public readonly resourceNameInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `stackNameInput`<sup>Optional</sup> <a name="stackNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.stackNameInput"></a>

```typescript
public readonly stackNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `physicalResourceId`<sup>Required</sup> <a name="physicalResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.physicalResourceId"></a>

```typescript
public readonly physicalResourceId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudRtsStackResourceV1Config <a name="DataOpentelekomcloudRtsStackResourceV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudRtsStackResourceV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudRtsStackResourceV1Config: dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.stackName">stackName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rts_stack_resource_v1#stack_name DataOpentelekomcloudRtsStackResourceV1#stack_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rts_stack_resource_v1#id DataOpentelekomcloudRtsStackResourceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.physicalResourceId">physicalResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rts_stack_resource_v1#physical_resource_id DataOpentelekomcloudRtsStackResourceV1#physical_resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rts_stack_resource_v1#region DataOpentelekomcloudRtsStackResourceV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.resourceName">resourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rts_stack_resource_v1#resource_name DataOpentelekomcloudRtsStackResourceV1#resource_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rts_stack_resource_v1#resource_type DataOpentelekomcloudRtsStackResourceV1#resource_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rts_stack_resource_v1#stack_name DataOpentelekomcloudRtsStackResourceV1#stack_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rts_stack_resource_v1#id DataOpentelekomcloudRtsStackResourceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `physicalResourceId`<sup>Optional</sup> <a name="physicalResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.physicalResourceId"></a>

```typescript
public readonly physicalResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rts_stack_resource_v1#physical_resource_id DataOpentelekomcloudRtsStackResourceV1#physical_resource_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rts_stack_resource_v1#region DataOpentelekomcloudRtsStackResourceV1#region}.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rts_stack_resource_v1#resource_name DataOpentelekomcloudRtsStackResourceV1#resource_name}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRtsStackResourceV1.DataOpentelekomcloudRtsStackResourceV1Config.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/rts_stack_resource_v1#resource_type DataOpentelekomcloudRtsStackResourceV1#resource_type}.

---



