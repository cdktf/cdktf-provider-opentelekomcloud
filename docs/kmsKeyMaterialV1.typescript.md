# `kmsKeyMaterialV1` Submodule <a name="`kmsKeyMaterialV1` Submodule" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsKeyMaterialV1 <a name="KmsKeyMaterialV1" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/kms_key_material_v1 opentelekomcloud_kms_key_material_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.Initializer"></a>

```typescript
import { kmsKeyMaterialV1 } from '@cdktf/provider-opentelekomcloud'

new kmsKeyMaterialV1.KmsKeyMaterialV1(scope: Construct, id: string, config: KmsKeyMaterialV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config">KmsKeyMaterialV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config">KmsKeyMaterialV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.resetExpirationTime">resetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetExpirationTime` <a name="resetExpirationTime" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.resetExpirationTime"></a>

```typescript
public resetExpirationTime(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KmsKeyMaterialV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.isConstruct"></a>

```typescript
import { kmsKeyMaterialV1 } from '@cdktf/provider-opentelekomcloud'

kmsKeyMaterialV1.KmsKeyMaterialV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.isTerraformElement"></a>

```typescript
import { kmsKeyMaterialV1 } from '@cdktf/provider-opentelekomcloud'

kmsKeyMaterialV1.KmsKeyMaterialV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.isTerraformResource"></a>

```typescript
import { kmsKeyMaterialV1 } from '@cdktf/provider-opentelekomcloud'

kmsKeyMaterialV1.KmsKeyMaterialV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.generateConfigForImport"></a>

```typescript
import { kmsKeyMaterialV1 } from '@cdktf/provider-opentelekomcloud'

kmsKeyMaterialV1.KmsKeyMaterialV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KmsKeyMaterialV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmsKeyMaterialV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmsKeyMaterialV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/kms_key_material_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmsKeyMaterialV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.keyState">keyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.encryptedKeyMaterialInput">encryptedKeyMaterialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.expirationTimeInput">expirationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.importTokenInput">importTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.encryptedKeyMaterial">encryptedKeyMaterial</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.importToken">importToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyState`<sup>Required</sup> <a name="keyState" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.keyState"></a>

```typescript
public readonly keyState: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `encryptedKeyMaterialInput`<sup>Optional</sup> <a name="encryptedKeyMaterialInput" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.encryptedKeyMaterialInput"></a>

```typescript
public readonly encryptedKeyMaterialInput: string;
```

- *Type:* string

---

##### `expirationTimeInput`<sup>Optional</sup> <a name="expirationTimeInput" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.expirationTimeInput"></a>

```typescript
public readonly expirationTimeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importTokenInput`<sup>Optional</sup> <a name="importTokenInput" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.importTokenInput"></a>

```typescript
public readonly importTokenInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `encryptedKeyMaterial`<sup>Required</sup> <a name="encryptedKeyMaterial" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.encryptedKeyMaterial"></a>

```typescript
public readonly encryptedKeyMaterial: string;
```

- *Type:* string

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importToken`<sup>Required</sup> <a name="importToken" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.importToken"></a>

```typescript
public readonly importToken: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsKeyMaterialV1Config <a name="KmsKeyMaterialV1Config" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.Initializer"></a>

```typescript
import { kmsKeyMaterialV1 } from '@cdktf/provider-opentelekomcloud'

const kmsKeyMaterialV1Config: kmsKeyMaterialV1.KmsKeyMaterialV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.encryptedKeyMaterial">encryptedKeyMaterial</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/kms_key_material_v1#encrypted_key_material KmsKeyMaterialV1#encrypted_key_material}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.importToken">importToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/kms_key_material_v1#import_token KmsKeyMaterialV1#import_token}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/kms_key_material_v1#key_id KmsKeyMaterialV1#key_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.expirationTime">expirationTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/kms_key_material_v1#expiration_time KmsKeyMaterialV1#expiration_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/kms_key_material_v1#id KmsKeyMaterialV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `encryptedKeyMaterial`<sup>Required</sup> <a name="encryptedKeyMaterial" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.encryptedKeyMaterial"></a>

```typescript
public readonly encryptedKeyMaterial: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/kms_key_material_v1#encrypted_key_material KmsKeyMaterialV1#encrypted_key_material}.

---

##### `importToken`<sup>Required</sup> <a name="importToken" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.importToken"></a>

```typescript
public readonly importToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/kms_key_material_v1#import_token KmsKeyMaterialV1#import_token}.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/kms_key_material_v1#key_id KmsKeyMaterialV1#key_id}.

---

##### `expirationTime`<sup>Optional</sup> <a name="expirationTime" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/kms_key_material_v1#expiration_time KmsKeyMaterialV1#expiration_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyMaterialV1.KmsKeyMaterialV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/kms_key_material_v1#id KmsKeyMaterialV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


