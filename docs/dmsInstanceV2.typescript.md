# `dmsInstanceV2` Submodule <a name="`dmsInstanceV2` Submodule" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsInstanceV2 <a name="DmsInstanceV2" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2 opentelekomcloud_dms_instance_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer"></a>

```typescript
import { dmsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

new dmsInstanceV2.DmsInstanceV2(scope: Construct, id: string, config: DmsInstanceV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config">DmsInstanceV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config">DmsInstanceV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetAccessUser">resetAccessUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetDiskEncryptedEnable">resetDiskEncryptedEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetDiskEncryptedKey">resetDiskEncryptedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetEnablePublicip">resetEnablePublicip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetMaintainBegin">resetMaintainBegin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetMaintainEnd">resetMaintainEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPartitionNum">resetPartitionNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPublicBandwidth">resetPublicBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPublicipId">resetPublicipId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetRetentionPolicy">resetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetSpecification">resetSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.putTimeouts"></a>

```typescript
public putTimeouts(value: DmsInstanceV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts">DmsInstanceV2Timeouts</a>

---

##### `resetAccessUser` <a name="resetAccessUser" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetAccessUser"></a>

```typescript
public resetAccessUser(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDiskEncryptedEnable` <a name="resetDiskEncryptedEnable" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetDiskEncryptedEnable"></a>

```typescript
public resetDiskEncryptedEnable(): void
```

##### `resetDiskEncryptedKey` <a name="resetDiskEncryptedKey" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetDiskEncryptedKey"></a>

```typescript
public resetDiskEncryptedKey(): void
```

##### `resetEnablePublicip` <a name="resetEnablePublicip" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetEnablePublicip"></a>

```typescript
public resetEnablePublicip(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaintainBegin` <a name="resetMaintainBegin" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetMaintainBegin"></a>

```typescript
public resetMaintainBegin(): void
```

##### `resetMaintainEnd` <a name="resetMaintainEnd" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetMaintainEnd"></a>

```typescript
public resetMaintainEnd(): void
```

##### `resetPartitionNum` <a name="resetPartitionNum" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPartitionNum"></a>

```typescript
public resetPartitionNum(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPublicBandwidth` <a name="resetPublicBandwidth" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPublicBandwidth"></a>

```typescript
public resetPublicBandwidth(): void
```

##### `resetPublicipId` <a name="resetPublicipId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPublicipId"></a>

```typescript
public resetPublicipId(): void
```

##### `resetRetentionPolicy` <a name="resetRetentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetRetentionPolicy"></a>

```typescript
public resetRetentionPolicy(): void
```

##### `resetSpecification` <a name="resetSpecification" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetSpecification"></a>

```typescript
public resetSpecification(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DmsInstanceV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isConstruct"></a>

```typescript
import { dmsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

dmsInstanceV2.DmsInstanceV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isTerraformElement"></a>

```typescript
import { dmsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

dmsInstanceV2.DmsInstanceV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isTerraformResource"></a>

```typescript
import { dmsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

dmsInstanceV2.DmsInstanceV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.generateConfigForImport"></a>

```typescript
import { dmsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

dmsInstanceV2.DmsInstanceV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DmsInstanceV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsInstanceV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsInstanceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DmsInstanceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.connectAddress">connectAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.nodeNum">nodeNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicAccessEnabled">publicAccessEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicConnectAddress">publicConnectAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.resourceSpecCode">resourceSpecCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.sslEnable">sslEnable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageResourceId">storageResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetCidr">subnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetName">subnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference">DmsInstanceV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.totalStorageSpace">totalStorageSpace</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.usedStorageSpace">usedStorageSpace</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.vpcName">vpcName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.accessUserInput">accessUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.availableZonesInput">availableZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.diskEncryptedEnableInput">diskEncryptedEnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.diskEncryptedKeyInput">diskEncryptedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.enablePublicipInput">enablePublicipInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainBeginInput">maintainBeginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainEndInput">maintainEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.partitionNumInput">partitionNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.productIdInput">productIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicBandwidthInput">publicBandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicipIdInput">publicipIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.retentionPolicyInput">retentionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.specificationInput">specificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpaceInput">storageSpaceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpecCodeInput">storageSpecCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts">DmsInstanceV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.accessUser">accessUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.availableZones">availableZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.diskEncryptedEnable">diskEncryptedEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.diskEncryptedKey">diskEncryptedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.enablePublicip">enablePublicip</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainBegin">maintainBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainEnd">maintainEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.partitionNum">partitionNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicBandwidth">publicBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicipId">publicipId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.retentionPolicy">retentionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.specification">specification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpace">storageSpace</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpecCode">storageSpecCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectAddress`<sup>Required</sup> <a name="connectAddress" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.connectAddress"></a>

```typescript
public readonly connectAddress: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `nodeNum`<sup>Required</sup> <a name="nodeNum" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.nodeNum"></a>

```typescript
public readonly nodeNum: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `publicAccessEnabled`<sup>Required</sup> <a name="publicAccessEnabled" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicAccessEnabled"></a>

```typescript
public readonly publicAccessEnabled: string;
```

- *Type:* string

---

##### `publicConnectAddress`<sup>Required</sup> <a name="publicConnectAddress" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicConnectAddress"></a>

```typescript
public readonly publicConnectAddress: string[];
```

- *Type:* string[]

---

##### `resourceSpecCode`<sup>Required</sup> <a name="resourceSpecCode" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.resourceSpecCode"></a>

```typescript
public readonly resourceSpecCode: string;
```

- *Type:* string

---

##### `securityGroupName`<sup>Required</sup> <a name="securityGroupName" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

---

##### `sslEnable`<sup>Required</sup> <a name="sslEnable" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.sslEnable"></a>

```typescript
public readonly sslEnable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `storageResourceId`<sup>Required</sup> <a name="storageResourceId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageResourceId"></a>

```typescript
public readonly storageResourceId: string;
```

- *Type:* string

---

##### `subnetCidr`<sup>Required</sup> <a name="subnetCidr" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetCidr"></a>

```typescript
public readonly subnetCidr: string;
```

- *Type:* string

---

##### `subnetName`<sup>Required</sup> <a name="subnetName" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetName"></a>

```typescript
public readonly subnetName: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.timeouts"></a>

```typescript
public readonly timeouts: DmsInstanceV2TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference">DmsInstanceV2TimeoutsOutputReference</a>

---

##### `totalStorageSpace`<sup>Required</sup> <a name="totalStorageSpace" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.totalStorageSpace"></a>

```typescript
public readonly totalStorageSpace: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `usedStorageSpace`<sup>Required</sup> <a name="usedStorageSpace" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.usedStorageSpace"></a>

```typescript
public readonly usedStorageSpace: number;
```

- *Type:* number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `vpcName`<sup>Required</sup> <a name="vpcName" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string

---

##### `accessUserInput`<sup>Optional</sup> <a name="accessUserInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.accessUserInput"></a>

```typescript
public readonly accessUserInput: string;
```

- *Type:* string

---

##### `availableZonesInput`<sup>Optional</sup> <a name="availableZonesInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.availableZonesInput"></a>

```typescript
public readonly availableZonesInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `diskEncryptedEnableInput`<sup>Optional</sup> <a name="diskEncryptedEnableInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.diskEncryptedEnableInput"></a>

```typescript
public readonly diskEncryptedEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diskEncryptedKeyInput`<sup>Optional</sup> <a name="diskEncryptedKeyInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.diskEncryptedKeyInput"></a>

```typescript
public readonly diskEncryptedKeyInput: string;
```

- *Type:* string

---

##### `enablePublicipInput`<sup>Optional</sup> <a name="enablePublicipInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.enablePublicipInput"></a>

```typescript
public readonly enablePublicipInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maintainBeginInput`<sup>Optional</sup> <a name="maintainBeginInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainBeginInput"></a>

```typescript
public readonly maintainBeginInput: string;
```

- *Type:* string

---

##### `maintainEndInput`<sup>Optional</sup> <a name="maintainEndInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainEndInput"></a>

```typescript
public readonly maintainEndInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partitionNumInput`<sup>Optional</sup> <a name="partitionNumInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.partitionNumInput"></a>

```typescript
public readonly partitionNumInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.productIdInput"></a>

```typescript
public readonly productIdInput: string;
```

- *Type:* string

---

##### `publicBandwidthInput`<sup>Optional</sup> <a name="publicBandwidthInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicBandwidthInput"></a>

```typescript
public readonly publicBandwidthInput: number;
```

- *Type:* number

---

##### `publicipIdInput`<sup>Optional</sup> <a name="publicipIdInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicipIdInput"></a>

```typescript
public readonly publicipIdInput: string[];
```

- *Type:* string[]

---

##### `retentionPolicyInput`<sup>Optional</sup> <a name="retentionPolicyInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.retentionPolicyInput"></a>

```typescript
public readonly retentionPolicyInput: string;
```

- *Type:* string

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.securityGroupIdInput"></a>

```typescript
public readonly securityGroupIdInput: string;
```

- *Type:* string

---

##### `specificationInput`<sup>Optional</sup> <a name="specificationInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.specificationInput"></a>

```typescript
public readonly specificationInput: string;
```

- *Type:* string

---

##### `storageSpaceInput`<sup>Optional</sup> <a name="storageSpaceInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpaceInput"></a>

```typescript
public readonly storageSpaceInput: number;
```

- *Type:* number

---

##### `storageSpecCodeInput`<sup>Optional</sup> <a name="storageSpecCodeInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpecCodeInput"></a>

```typescript
public readonly storageSpecCodeInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DmsInstanceV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts">DmsInstanceV2Timeouts</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `accessUser`<sup>Required</sup> <a name="accessUser" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.accessUser"></a>

```typescript
public readonly accessUser: string;
```

- *Type:* string

---

##### `availableZones`<sup>Required</sup> <a name="availableZones" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.availableZones"></a>

```typescript
public readonly availableZones: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `diskEncryptedEnable`<sup>Required</sup> <a name="diskEncryptedEnable" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.diskEncryptedEnable"></a>

```typescript
public readonly diskEncryptedEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diskEncryptedKey`<sup>Required</sup> <a name="diskEncryptedKey" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.diskEncryptedKey"></a>

```typescript
public readonly diskEncryptedKey: string;
```

- *Type:* string

---

##### `enablePublicip`<sup>Required</sup> <a name="enablePublicip" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.enablePublicip"></a>

```typescript
public readonly enablePublicip: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintainBegin`<sup>Required</sup> <a name="maintainBegin" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainBegin"></a>

```typescript
public readonly maintainBegin: string;
```

- *Type:* string

---

##### `maintainEnd`<sup>Required</sup> <a name="maintainEnd" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainEnd"></a>

```typescript
public readonly maintainEnd: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partitionNum`<sup>Required</sup> <a name="partitionNum" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.partitionNum"></a>

```typescript
public readonly partitionNum: number;
```

- *Type:* number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `publicBandwidth`<sup>Required</sup> <a name="publicBandwidth" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicBandwidth"></a>

```typescript
public readonly publicBandwidth: number;
```

- *Type:* number

---

##### `publicipId`<sup>Required</sup> <a name="publicipId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicipId"></a>

```typescript
public readonly publicipId: string[];
```

- *Type:* string[]

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: string;
```

- *Type:* string

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `specification`<sup>Required</sup> <a name="specification" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.specification"></a>

```typescript
public readonly specification: string;
```

- *Type:* string

---

##### `storageSpace`<sup>Required</sup> <a name="storageSpace" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpace"></a>

```typescript
public readonly storageSpace: number;
```

- *Type:* number

---

##### `storageSpecCode`<sup>Required</sup> <a name="storageSpecCode" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpecCode"></a>

```typescript
public readonly storageSpecCode: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsInstanceV2Config <a name="DmsInstanceV2Config" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.Initializer"></a>

```typescript
import { dmsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

const dmsInstanceV2Config: dmsInstanceV2.DmsInstanceV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.availableZones">availableZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#available_zones DmsInstanceV2#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#engine DmsInstanceV2#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.engineVersion">engineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#engine_version DmsInstanceV2#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#name DmsInstanceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.productId">productId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#product_id DmsInstanceV2#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#security_group_id DmsInstanceV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.storageSpace">storageSpace</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#storage_space DmsInstanceV2#storage_space}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.storageSpecCode">storageSpecCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#storage_spec_code DmsInstanceV2#storage_spec_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#subnet_id DmsInstanceV2#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#vpc_id DmsInstanceV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.accessUser">accessUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#access_user DmsInstanceV2#access_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#description DmsInstanceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.diskEncryptedEnable">diskEncryptedEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#disk_encrypted_enable DmsInstanceV2#disk_encrypted_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.diskEncryptedKey">diskEncryptedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#disk_encrypted_key DmsInstanceV2#disk_encrypted_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.enablePublicip">enablePublicip</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#enable_publicip DmsInstanceV2#enable_publicip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#id DmsInstanceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.maintainBegin">maintainBegin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#maintain_begin DmsInstanceV2#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.maintainEnd">maintainEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#maintain_end DmsInstanceV2#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.partitionNum">partitionNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#partition_num DmsInstanceV2#partition_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#password DmsInstanceV2#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.publicBandwidth">publicBandwidth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#public_bandwidth DmsInstanceV2#public_bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.publicipId">publicipId</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#publicip_id DmsInstanceV2#publicip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.retentionPolicy">retentionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#retention_policy DmsInstanceV2#retention_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.specification">specification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#specification DmsInstanceV2#specification}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#tags DmsInstanceV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts">DmsInstanceV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availableZones`<sup>Required</sup> <a name="availableZones" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.availableZones"></a>

```typescript
public readonly availableZones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#available_zones DmsInstanceV2#available_zones}.

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#engine DmsInstanceV2#engine}.

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#engine_version DmsInstanceV2#engine_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#name DmsInstanceV2#name}.

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#product_id DmsInstanceV2#product_id}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#security_group_id DmsInstanceV2#security_group_id}.

---

##### `storageSpace`<sup>Required</sup> <a name="storageSpace" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.storageSpace"></a>

```typescript
public readonly storageSpace: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#storage_space DmsInstanceV2#storage_space}.

---

##### `storageSpecCode`<sup>Required</sup> <a name="storageSpecCode" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.storageSpecCode"></a>

```typescript
public readonly storageSpecCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#storage_spec_code DmsInstanceV2#storage_spec_code}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#subnet_id DmsInstanceV2#subnet_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#vpc_id DmsInstanceV2#vpc_id}.

---

##### `accessUser`<sup>Optional</sup> <a name="accessUser" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.accessUser"></a>

```typescript
public readonly accessUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#access_user DmsInstanceV2#access_user}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#description DmsInstanceV2#description}.

---

##### `diskEncryptedEnable`<sup>Optional</sup> <a name="diskEncryptedEnable" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.diskEncryptedEnable"></a>

```typescript
public readonly diskEncryptedEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#disk_encrypted_enable DmsInstanceV2#disk_encrypted_enable}.

---

##### `diskEncryptedKey`<sup>Optional</sup> <a name="diskEncryptedKey" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.diskEncryptedKey"></a>

```typescript
public readonly diskEncryptedKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#disk_encrypted_key DmsInstanceV2#disk_encrypted_key}.

---

##### `enablePublicip`<sup>Optional</sup> <a name="enablePublicip" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.enablePublicip"></a>

```typescript
public readonly enablePublicip: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#enable_publicip DmsInstanceV2#enable_publicip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#id DmsInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintainBegin`<sup>Optional</sup> <a name="maintainBegin" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.maintainBegin"></a>

```typescript
public readonly maintainBegin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#maintain_begin DmsInstanceV2#maintain_begin}.

---

##### `maintainEnd`<sup>Optional</sup> <a name="maintainEnd" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.maintainEnd"></a>

```typescript
public readonly maintainEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#maintain_end DmsInstanceV2#maintain_end}.

---

##### `partitionNum`<sup>Optional</sup> <a name="partitionNum" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.partitionNum"></a>

```typescript
public readonly partitionNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#partition_num DmsInstanceV2#partition_num}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#password DmsInstanceV2#password}.

---

##### `publicBandwidth`<sup>Optional</sup> <a name="publicBandwidth" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.publicBandwidth"></a>

```typescript
public readonly publicBandwidth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#public_bandwidth DmsInstanceV2#public_bandwidth}.

---

##### `publicipId`<sup>Optional</sup> <a name="publicipId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.publicipId"></a>

```typescript
public readonly publicipId: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#publicip_id DmsInstanceV2#publicip_id}.

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#retention_policy DmsInstanceV2#retention_policy}.

---

##### `specification`<sup>Optional</sup> <a name="specification" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.specification"></a>

```typescript
public readonly specification: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#specification DmsInstanceV2#specification}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#tags DmsInstanceV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: DmsInstanceV2Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts">DmsInstanceV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#timeouts DmsInstanceV2#timeouts}

---

### DmsInstanceV2Timeouts <a name="DmsInstanceV2Timeouts" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.Initializer"></a>

```typescript
import { dmsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

const dmsInstanceV2Timeouts: dmsInstanceV2.DmsInstanceV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#create DmsInstanceV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#delete DmsInstanceV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#update DmsInstanceV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#create DmsInstanceV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#delete DmsInstanceV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dms_instance_v2#update DmsInstanceV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsInstanceV2TimeoutsOutputReference <a name="DmsInstanceV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { dmsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

new dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts">DmsInstanceV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsInstanceV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts">DmsInstanceV2Timeouts</a>

---



