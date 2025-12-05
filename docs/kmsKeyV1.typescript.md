# `kmsKeyV1` Submodule <a name="`kmsKeyV1` Submodule" id="@cdktf/provider-opentelekomcloud.kmsKeyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsKeyV1 <a name="KmsKeyV1" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1 opentelekomcloud_kms_key_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer"></a>

```typescript
import { kmsKeyV1 } from '@cdktf/provider-opentelekomcloud'

new kmsKeyV1.KmsKeyV1(scope: Construct, id: string, config: KmsKeyV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config">KmsKeyV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config">KmsKeyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetAllowCancelDeletion">resetAllowCancelDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetKeyDescription">resetKeyDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetPendingDays">resetPendingDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRealm">resetRealm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRotationEnabled">resetRotationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRotationInterval">resetRotationInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowCancelDeletion` <a name="resetAllowCancelDeletion" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetAllowCancelDeletion"></a>

```typescript
public resetAllowCancelDeletion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetKeyDescription` <a name="resetKeyDescription" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetKeyDescription"></a>

```typescript
public resetKeyDescription(): void
```

##### `resetOrigin` <a name="resetOrigin" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetOrigin"></a>

```typescript
public resetOrigin(): void
```

##### `resetPendingDays` <a name="resetPendingDays" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetPendingDays"></a>

```typescript
public resetPendingDays(): void
```

##### `resetRealm` <a name="resetRealm" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRealm"></a>

```typescript
public resetRealm(): void
```

##### `resetRotationEnabled` <a name="resetRotationEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRotationEnabled"></a>

```typescript
public resetRotationEnabled(): void
```

##### `resetRotationInterval` <a name="resetRotationInterval" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRotationInterval"></a>

```typescript
public resetRotationInterval(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KmsKeyV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isConstruct"></a>

```typescript
import { kmsKeyV1 } from '@cdktf/provider-opentelekomcloud'

kmsKeyV1.KmsKeyV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformElement"></a>

```typescript
import { kmsKeyV1 } from '@cdktf/provider-opentelekomcloud'

kmsKeyV1.KmsKeyV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformResource"></a>

```typescript
import { kmsKeyV1 } from '@cdktf/provider-opentelekomcloud'

kmsKeyV1.KmsKeyV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.generateConfigForImport"></a>

```typescript
import { kmsKeyV1 } from '@cdktf/provider-opentelekomcloud'

kmsKeyV1.KmsKeyV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KmsKeyV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmsKeyV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmsKeyV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmsKeyV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.defaultKeyFlag">defaultKeyFlag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyState">keyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationNumber">rotationNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.scheduledDeletionDate">scheduledDeletionDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.allowCancelDeletionInput">allowCancelDeletionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyAliasInput">keyAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyDescriptionInput">keyDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.originInput">originInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.pendingDaysInput">pendingDaysInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.realmInput">realmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationEnabledInput">rotationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationIntervalInput">rotationIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.allowCancelDeletion">allowCancelDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyAlias">keyAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyDescription">keyDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.pendingDays">pendingDays</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.realm">realm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationEnabled">rotationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationInterval">rotationInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `defaultKeyFlag`<sup>Required</sup> <a name="defaultKeyFlag" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.defaultKeyFlag"></a>

```typescript
public readonly defaultKeyFlag: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `keyState`<sup>Required</sup> <a name="keyState" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyState"></a>

```typescript
public readonly keyState: string;
```

- *Type:* string

---

##### `rotationNumber`<sup>Required</sup> <a name="rotationNumber" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationNumber"></a>

```typescript
public readonly rotationNumber: number;
```

- *Type:* number

---

##### `scheduledDeletionDate`<sup>Required</sup> <a name="scheduledDeletionDate" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.scheduledDeletionDate"></a>

```typescript
public readonly scheduledDeletionDate: string;
```

- *Type:* string

---

##### `allowCancelDeletionInput`<sup>Optional</sup> <a name="allowCancelDeletionInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.allowCancelDeletionInput"></a>

```typescript
public readonly allowCancelDeletionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyAliasInput`<sup>Optional</sup> <a name="keyAliasInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyAliasInput"></a>

```typescript
public readonly keyAliasInput: string;
```

- *Type:* string

---

##### `keyDescriptionInput`<sup>Optional</sup> <a name="keyDescriptionInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyDescriptionInput"></a>

```typescript
public readonly keyDescriptionInput: string;
```

- *Type:* string

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.originInput"></a>

```typescript
public readonly originInput: string;
```

- *Type:* string

---

##### `pendingDaysInput`<sup>Optional</sup> <a name="pendingDaysInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.pendingDaysInput"></a>

```typescript
public readonly pendingDaysInput: string;
```

- *Type:* string

---

##### `realmInput`<sup>Optional</sup> <a name="realmInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.realmInput"></a>

```typescript
public readonly realmInput: string;
```

- *Type:* string

---

##### `rotationEnabledInput`<sup>Optional</sup> <a name="rotationEnabledInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationEnabledInput"></a>

```typescript
public readonly rotationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rotationIntervalInput`<sup>Optional</sup> <a name="rotationIntervalInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationIntervalInput"></a>

```typescript
public readonly rotationIntervalInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `allowCancelDeletion`<sup>Required</sup> <a name="allowCancelDeletion" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.allowCancelDeletion"></a>

```typescript
public readonly allowCancelDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyAlias`<sup>Required</sup> <a name="keyAlias" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyAlias"></a>

```typescript
public readonly keyAlias: string;
```

- *Type:* string

---

##### `keyDescription`<sup>Required</sup> <a name="keyDescription" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyDescription"></a>

```typescript
public readonly keyDescription: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `pendingDays`<sup>Required</sup> <a name="pendingDays" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.pendingDays"></a>

```typescript
public readonly pendingDays: string;
```

- *Type:* string

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.realm"></a>

```typescript
public readonly realm: string;
```

- *Type:* string

---

##### `rotationEnabled`<sup>Required</sup> <a name="rotationEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationEnabled"></a>

```typescript
public readonly rotationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rotationInterval`<sup>Required</sup> <a name="rotationInterval" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationInterval"></a>

```typescript
public readonly rotationInterval: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsKeyV1Config <a name="KmsKeyV1Config" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.Initializer"></a>

```typescript
import { kmsKeyV1 } from '@cdktf/provider-opentelekomcloud'

const kmsKeyV1Config: kmsKeyV1.KmsKeyV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.keyAlias">keyAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#key_alias KmsKeyV1#key_alias}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.allowCancelDeletion">allowCancelDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#allow_cancel_deletion KmsKeyV1#allow_cancel_deletion}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#id KmsKeyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#is_enabled KmsKeyV1#is_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.keyDescription">keyDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#key_description KmsKeyV1#key_description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.origin">origin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#origin KmsKeyV1#origin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.pendingDays">pendingDays</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#pending_days KmsKeyV1#pending_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.realm">realm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#realm KmsKeyV1#realm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.rotationEnabled">rotationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#rotation_enabled KmsKeyV1#rotation_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.rotationInterval">rotationInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#rotation_interval KmsKeyV1#rotation_interval}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#tags KmsKeyV1#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyAlias`<sup>Required</sup> <a name="keyAlias" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.keyAlias"></a>

```typescript
public readonly keyAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#key_alias KmsKeyV1#key_alias}.

---

##### `allowCancelDeletion`<sup>Optional</sup> <a name="allowCancelDeletion" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.allowCancelDeletion"></a>

```typescript
public readonly allowCancelDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#allow_cancel_deletion KmsKeyV1#allow_cancel_deletion}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#id KmsKeyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#is_enabled KmsKeyV1#is_enabled}.

---

##### `keyDescription`<sup>Optional</sup> <a name="keyDescription" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.keyDescription"></a>

```typescript
public readonly keyDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#key_description KmsKeyV1#key_description}.

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#origin KmsKeyV1#origin}.

---

##### `pendingDays`<sup>Optional</sup> <a name="pendingDays" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.pendingDays"></a>

```typescript
public readonly pendingDays: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#pending_days KmsKeyV1#pending_days}.

---

##### `realm`<sup>Optional</sup> <a name="realm" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.realm"></a>

```typescript
public readonly realm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#realm KmsKeyV1#realm}.

---

##### `rotationEnabled`<sup>Optional</sup> <a name="rotationEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.rotationEnabled"></a>

```typescript
public readonly rotationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#rotation_enabled KmsKeyV1#rotation_enabled}.

---

##### `rotationInterval`<sup>Optional</sup> <a name="rotationInterval" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.rotationInterval"></a>

```typescript
public readonly rotationInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#rotation_interval KmsKeyV1#rotation_interval}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/kms_key_v1#tags KmsKeyV1#tags}.

---



