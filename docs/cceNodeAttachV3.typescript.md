# `cceNodeAttachV3` Submodule <a name="`cceNodeAttachV3` Submodule" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CceNodeAttachV3 <a name="CceNodeAttachV3" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3 opentelekomcloud_cce_node_attach_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeAttachV3.CceNodeAttachV3(scope: Construct, id: string, config: CceNodeAttachV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config">CceNodeAttachV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config">CceNodeAttachV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetDockerBaseSize">resetDockerBaseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetK8STags">resetK8STags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetKeyPair">resetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetLvmConfig">resetLvmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetMaxPods">resetMaxPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetPostinstall">resetPostinstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetPreinstall">resetPreinstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetSystemDiskKmsKeyId">resetSystemDiskKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetTaints">resetTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStorage` <a name="putStorage" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putStorage"></a>

```typescript
public putStorage(value: CceNodeAttachV3Storage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage">CceNodeAttachV3Storage</a>

---

##### `putTaints` <a name="putTaints" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putTaints"></a>

```typescript
public putTaints(value: IResolvable | CceNodeAttachV3Taints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putTaints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putTimeouts"></a>

```typescript
public putTimeouts(value: CceNodeAttachV3Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts">CceNodeAttachV3Timeouts</a>

---

##### `resetDockerBaseSize` <a name="resetDockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetDockerBaseSize"></a>

```typescript
public resetDockerBaseSize(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetK8STags` <a name="resetK8STags" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetK8STags"></a>

```typescript
public resetK8STags(): void
```

##### `resetKeyPair` <a name="resetKeyPair" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetKeyPair"></a>

```typescript
public resetKeyPair(): void
```

##### `resetLvmConfig` <a name="resetLvmConfig" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetLvmConfig"></a>

```typescript
public resetLvmConfig(): void
```

##### `resetMaxPods` <a name="resetMaxPods" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetMaxPods"></a>

```typescript
public resetMaxPods(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPostinstall` <a name="resetPostinstall" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetPostinstall"></a>

```typescript
public resetPostinstall(): void
```

##### `resetPreinstall` <a name="resetPreinstall" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetPreinstall"></a>

```typescript
public resetPreinstall(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetRuntime"></a>

```typescript
public resetRuntime(): void
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetStorage"></a>

```typescript
public resetStorage(): void
```

##### `resetSystemDiskKmsKeyId` <a name="resetSystemDiskKmsKeyId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetSystemDiskKmsKeyId"></a>

```typescript
public resetSystemDiskKmsKeyId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetTaints"></a>

```typescript
public resetTaints(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CceNodeAttachV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.isConstruct"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

cceNodeAttachV3.CceNodeAttachV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.isTerraformElement"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

cceNodeAttachV3.CceNodeAttachV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.isTerraformResource"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

cceNodeAttachV3.CceNodeAttachV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.generateConfigForImport"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

cceNodeAttachV3.CceNodeAttachV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CceNodeAttachV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CceNodeAttachV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CceNodeAttachV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CceNodeAttachV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.billingMode">billingMode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.dataVolumes">dataVolumes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList">CceNodeAttachV3DataVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.flavorId">flavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.publicIp">publicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList">CceNodeAttachV3RootVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference">CceNodeAttachV3StorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList">CceNodeAttachV3TaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference">CceNodeAttachV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.dockerBaseSizeInput">dockerBaseSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.k8STagsInput">k8STagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.keyPairInput">keyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.lvmConfigInput">lvmConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.maxPodsInput">maxPodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.osInput">osInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.postinstallInput">postinstallInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.preinstallInput">preinstallInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.serverIdInput">serverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.storageInput">storageInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage">CceNodeAttachV3Storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.systemDiskKmsKeyIdInput">systemDiskKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.taintsInput">taintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts">CceNodeAttachV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.dockerBaseSize">dockerBaseSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.k8STags">k8STags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.keyPair">keyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.lvmConfig">lvmConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.maxPods">maxPods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.os">os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.postinstall">postinstall</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.preinstall">preinstall</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.systemDiskKmsKeyId">systemDiskKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `billingMode`<sup>Required</sup> <a name="billingMode" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.billingMode"></a>

```typescript
public readonly billingMode: number;
```

- *Type:* number

---

##### `dataVolumes`<sup>Required</sup> <a name="dataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.dataVolumes"></a>

```typescript
public readonly dataVolumes: CceNodeAttachV3DataVolumesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList">CceNodeAttachV3DataVolumesList</a>

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.flavorId"></a>

```typescript
public readonly flavorId: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.publicIp"></a>

```typescript
public readonly publicIp: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.rootVolume"></a>

```typescript
public readonly rootVolume: CceNodeAttachV3RootVolumeList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList">CceNodeAttachV3RootVolumeList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.storage"></a>

```typescript
public readonly storage: CceNodeAttachV3StorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference">CceNodeAttachV3StorageOutputReference</a>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.taints"></a>

```typescript
public readonly taints: CceNodeAttachV3TaintsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList">CceNodeAttachV3TaintsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.timeouts"></a>

```typescript
public readonly timeouts: CceNodeAttachV3TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference">CceNodeAttachV3TimeoutsOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `dockerBaseSizeInput`<sup>Optional</sup> <a name="dockerBaseSizeInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.dockerBaseSizeInput"></a>

```typescript
public readonly dockerBaseSizeInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `k8STagsInput`<sup>Optional</sup> <a name="k8STagsInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.k8STagsInput"></a>

```typescript
public readonly k8STagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keyPairInput`<sup>Optional</sup> <a name="keyPairInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.keyPairInput"></a>

```typescript
public readonly keyPairInput: string;
```

- *Type:* string

---

##### `lvmConfigInput`<sup>Optional</sup> <a name="lvmConfigInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.lvmConfigInput"></a>

```typescript
public readonly lvmConfigInput: string;
```

- *Type:* string

---

##### `maxPodsInput`<sup>Optional</sup> <a name="maxPodsInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.maxPodsInput"></a>

```typescript
public readonly maxPodsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `osInput`<sup>Optional</sup> <a name="osInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.osInput"></a>

```typescript
public readonly osInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `postinstallInput`<sup>Optional</sup> <a name="postinstallInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.postinstallInput"></a>

```typescript
public readonly postinstallInput: string;
```

- *Type:* string

---

##### `preinstallInput`<sup>Optional</sup> <a name="preinstallInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.preinstallInput"></a>

```typescript
public readonly preinstallInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.serverIdInput"></a>

```typescript
public readonly serverIdInput: string;
```

- *Type:* string

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.storageInput"></a>

```typescript
public readonly storageInput: CceNodeAttachV3Storage;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage">CceNodeAttachV3Storage</a>

---

##### `systemDiskKmsKeyIdInput`<sup>Optional</sup> <a name="systemDiskKmsKeyIdInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.systemDiskKmsKeyIdInput"></a>

```typescript
public readonly systemDiskKmsKeyIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.taintsInput"></a>

```typescript
public readonly taintsInput: IResolvable | CceNodeAttachV3Taints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CceNodeAttachV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts">CceNodeAttachV3Timeouts</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `dockerBaseSize`<sup>Required</sup> <a name="dockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.dockerBaseSize"></a>

```typescript
public readonly dockerBaseSize: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `k8STags`<sup>Required</sup> <a name="k8STags" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.k8STags"></a>

```typescript
public readonly k8STags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.keyPair"></a>

```typescript
public readonly keyPair: string;
```

- *Type:* string

---

##### `lvmConfig`<sup>Required</sup> <a name="lvmConfig" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.lvmConfig"></a>

```typescript
public readonly lvmConfig: string;
```

- *Type:* string

---

##### `maxPods`<sup>Required</sup> <a name="maxPods" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.maxPods"></a>

```typescript
public readonly maxPods: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `postinstall`<sup>Required</sup> <a name="postinstall" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.postinstall"></a>

```typescript
public readonly postinstall: string;
```

- *Type:* string

---

##### `preinstall`<sup>Required</sup> <a name="preinstall" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.preinstall"></a>

```typescript
public readonly preinstall: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

##### `systemDiskKmsKeyId`<sup>Required</sup> <a name="systemDiskKmsKeyId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.systemDiskKmsKeyId"></a>

```typescript
public readonly systemDiskKmsKeyId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CceNodeAttachV3Config <a name="CceNodeAttachV3Config" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodeAttachV3Config: cceNodeAttachV3.CceNodeAttachV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#cluster_id CceNodeAttachV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.os">os</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#os CceNodeAttachV3#os}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.serverId">serverId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#server_id CceNodeAttachV3#server_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.dockerBaseSize">dockerBaseSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#docker_base_size CceNodeAttachV3#docker_base_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#id CceNodeAttachV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.k8STags">k8STags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#k8s_tags CceNodeAttachV3#k8s_tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.keyPair">keyPair</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#key_pair CceNodeAttachV3#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.lvmConfig">lvmConfig</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#lvm_config CceNodeAttachV3#lvm_config}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.maxPods">maxPods</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#max_pods CceNodeAttachV3#max_pods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#password CceNodeAttachV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.postinstall">postinstall</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#postinstall CceNodeAttachV3#postinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.preinstall">preinstall</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#preinstall CceNodeAttachV3#preinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.privateKey">privateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#private_key CceNodeAttachV3#private_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.runtime">runtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#runtime CceNodeAttachV3#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage">CceNodeAttachV3Storage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.systemDiskKmsKeyId">systemDiskKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#system_disk_kms_key_id CceNodeAttachV3#system_disk_kms_key_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#tags CceNodeAttachV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.taints">taints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>[]</code> | taints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts">CceNodeAttachV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#cluster_id CceNodeAttachV3#cluster_id}.

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#os CceNodeAttachV3#os}.

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#server_id CceNodeAttachV3#server_id}.

---

##### `dockerBaseSize`<sup>Optional</sup> <a name="dockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.dockerBaseSize"></a>

```typescript
public readonly dockerBaseSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#docker_base_size CceNodeAttachV3#docker_base_size}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#id CceNodeAttachV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `k8STags`<sup>Optional</sup> <a name="k8STags" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.k8STags"></a>

```typescript
public readonly k8STags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#k8s_tags CceNodeAttachV3#k8s_tags}.

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.keyPair"></a>

```typescript
public readonly keyPair: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#key_pair CceNodeAttachV3#key_pair}.

---

##### `lvmConfig`<sup>Optional</sup> <a name="lvmConfig" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.lvmConfig"></a>

```typescript
public readonly lvmConfig: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#lvm_config CceNodeAttachV3#lvm_config}.

---

##### `maxPods`<sup>Optional</sup> <a name="maxPods" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.maxPods"></a>

```typescript
public readonly maxPods: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#max_pods CceNodeAttachV3#max_pods}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#password CceNodeAttachV3#password}.

---

##### `postinstall`<sup>Optional</sup> <a name="postinstall" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.postinstall"></a>

```typescript
public readonly postinstall: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#postinstall CceNodeAttachV3#postinstall}.

---

##### `preinstall`<sup>Optional</sup> <a name="preinstall" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.preinstall"></a>

```typescript
public readonly preinstall: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#preinstall CceNodeAttachV3#preinstall}.

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#private_key CceNodeAttachV3#private_key}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#runtime CceNodeAttachV3#runtime}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.storage"></a>

```typescript
public readonly storage: CceNodeAttachV3Storage;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage">CceNodeAttachV3Storage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#storage CceNodeAttachV3#storage}

---

##### `systemDiskKmsKeyId`<sup>Optional</sup> <a name="systemDiskKmsKeyId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.systemDiskKmsKeyId"></a>

```typescript
public readonly systemDiskKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#system_disk_kms_key_id CceNodeAttachV3#system_disk_kms_key_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#tags CceNodeAttachV3#tags}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.taints"></a>

```typescript
public readonly taints: IResolvable | CceNodeAttachV3Taints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>[]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#taints CceNodeAttachV3#taints}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.timeouts"></a>

```typescript
public readonly timeouts: CceNodeAttachV3Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts">CceNodeAttachV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#timeouts CceNodeAttachV3#timeouts}

---

### CceNodeAttachV3DataVolumes <a name="CceNodeAttachV3DataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumes.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodeAttachV3DataVolumes: cceNodeAttachV3.CceNodeAttachV3DataVolumes = { ... }
```


### CceNodeAttachV3RootVolume <a name="CceNodeAttachV3RootVolume" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolume.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodeAttachV3RootVolume: cceNodeAttachV3.CceNodeAttachV3RootVolume = { ... }
```


### CceNodeAttachV3Storage <a name="CceNodeAttachV3Storage" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodeAttachV3Storage: cceNodeAttachV3.CceNodeAttachV3Storage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage.property.groups">groups</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a>[]</code> | groups block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage.property.selectors">selectors</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a>[]</code> | selectors block. |

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage.property.groups"></a>

```typescript
public readonly groups: IResolvable | CceNodeAttachV3StorageGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a>[]

groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#groups CceNodeAttachV3#groups}

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage.property.selectors"></a>

```typescript
public readonly selectors: IResolvable | CceNodeAttachV3StorageSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a>[]

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#selectors CceNodeAttachV3#selectors}

---

### CceNodeAttachV3StorageGroups <a name="CceNodeAttachV3StorageGroups" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodeAttachV3StorageGroups: cceNodeAttachV3.CceNodeAttachV3StorageGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups.property.selectorNames">selectorNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#selector_names CceNodeAttachV3#selector_names}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups.property.virtualSpaces">virtualSpaces</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces">CceNodeAttachV3StorageGroupsVirtualSpaces</a>[]</code> | virtual_spaces block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups.property.cceManaged">cceManaged</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#cce_managed CceNodeAttachV3#cce_managed}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}.

---

##### `selectorNames`<sup>Required</sup> <a name="selectorNames" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups.property.selectorNames"></a>

```typescript
public readonly selectorNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#selector_names CceNodeAttachV3#selector_names}.

---

##### `virtualSpaces`<sup>Required</sup> <a name="virtualSpaces" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups.property.virtualSpaces"></a>

```typescript
public readonly virtualSpaces: IResolvable | CceNodeAttachV3StorageGroupsVirtualSpaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces">CceNodeAttachV3StorageGroupsVirtualSpaces</a>[]

virtual_spaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#virtual_spaces CceNodeAttachV3#virtual_spaces}

---

##### `cceManaged`<sup>Optional</sup> <a name="cceManaged" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups.property.cceManaged"></a>

```typescript
public readonly cceManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#cce_managed CceNodeAttachV3#cce_managed}.

---

### CceNodeAttachV3StorageGroupsVirtualSpaces <a name="CceNodeAttachV3StorageGroupsVirtualSpaces" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodeAttachV3StorageGroupsVirtualSpaces: cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.size">size</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#size CceNodeAttachV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.lvmLvType">lvmLvType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#lvm_lv_type CceNodeAttachV3#lvm_lv_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.lvmPath">lvmPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#lvm_path CceNodeAttachV3#lvm_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.runtimeLvType">runtimeLvType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#runtime_lv_type CceNodeAttachV3#runtime_lv_type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#size CceNodeAttachV3#size}.

---

##### `lvmLvType`<sup>Optional</sup> <a name="lvmLvType" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.lvmLvType"></a>

```typescript
public readonly lvmLvType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#lvm_lv_type CceNodeAttachV3#lvm_lv_type}.

---

##### `lvmPath`<sup>Optional</sup> <a name="lvmPath" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.lvmPath"></a>

```typescript
public readonly lvmPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#lvm_path CceNodeAttachV3#lvm_path}.

---

##### `runtimeLvType`<sup>Optional</sup> <a name="runtimeLvType" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.runtimeLvType"></a>

```typescript
public readonly runtimeLvType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#runtime_lv_type CceNodeAttachV3#runtime_lv_type}.

---

### CceNodeAttachV3StorageSelectors <a name="CceNodeAttachV3StorageSelectors" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodeAttachV3StorageSelectors: cceNodeAttachV3.CceNodeAttachV3StorageSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelCount">matchLabelCount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#match_label_count CceNodeAttachV3#match_label_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelMetadataCmkid">matchLabelMetadataCmkid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#match_label_metadata_cmkid CceNodeAttachV3#match_label_metadata_cmkid}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelMetadataEncrypted">matchLabelMetadataEncrypted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#match_label_metadata_encrypted CceNodeAttachV3#match_label_metadata_encrypted}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelSize">matchLabelSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#match_label_size CceNodeAttachV3#match_label_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelVolumeType">matchLabelVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#match_label_volume_type CceNodeAttachV3#match_label_volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#type CceNodeAttachV3#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}.

---

##### `matchLabelCount`<sup>Optional</sup> <a name="matchLabelCount" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelCount"></a>

```typescript
public readonly matchLabelCount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#match_label_count CceNodeAttachV3#match_label_count}.

---

##### `matchLabelMetadataCmkid`<sup>Optional</sup> <a name="matchLabelMetadataCmkid" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelMetadataCmkid"></a>

```typescript
public readonly matchLabelMetadataCmkid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#match_label_metadata_cmkid CceNodeAttachV3#match_label_metadata_cmkid}.

---

##### `matchLabelMetadataEncrypted`<sup>Optional</sup> <a name="matchLabelMetadataEncrypted" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelMetadataEncrypted"></a>

```typescript
public readonly matchLabelMetadataEncrypted: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#match_label_metadata_encrypted CceNodeAttachV3#match_label_metadata_encrypted}.

---

##### `matchLabelSize`<sup>Optional</sup> <a name="matchLabelSize" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelSize"></a>

```typescript
public readonly matchLabelSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#match_label_size CceNodeAttachV3#match_label_size}.

---

##### `matchLabelVolumeType`<sup>Optional</sup> <a name="matchLabelVolumeType" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelVolumeType"></a>

```typescript
public readonly matchLabelVolumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#match_label_volume_type CceNodeAttachV3#match_label_volume_type}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#type CceNodeAttachV3#type}.

---

### CceNodeAttachV3Taints <a name="CceNodeAttachV3Taints" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodeAttachV3Taints: cceNodeAttachV3.CceNodeAttachV3Taints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints.property.effect">effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#effect CceNodeAttachV3#effect}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#key CceNodeAttachV3#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#value CceNodeAttachV3#value}. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#effect CceNodeAttachV3#effect}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#key CceNodeAttachV3#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#value CceNodeAttachV3#value}.

---

### CceNodeAttachV3Timeouts <a name="CceNodeAttachV3Timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodeAttachV3Timeouts: cceNodeAttachV3.CceNodeAttachV3Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#create CceNodeAttachV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#delete CceNodeAttachV3#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#update CceNodeAttachV3#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#create CceNodeAttachV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#delete CceNodeAttachV3#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.41/docs/resources/cce_node_attach_v3#update CceNodeAttachV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CceNodeAttachV3DataVolumesList <a name="CceNodeAttachV3DataVolumesList" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeAttachV3.CceNodeAttachV3DataVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.get"></a>

```typescript
public get(index: number): CceNodeAttachV3DataVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CceNodeAttachV3DataVolumesOutputReference <a name="CceNodeAttachV3DataVolumesOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.dssPoolId">dssPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.extendParam">extendParam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.extendParams">extendParams</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.hwPassthrough">hwPassthrough</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.kmsId">kmsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.volumetype">volumetype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumes">CceNodeAttachV3DataVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dssPoolId`<sup>Required</sup> <a name="dssPoolId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.dssPoolId"></a>

```typescript
public readonly dssPoolId: string;
```

- *Type:* string

---

##### `extendParam`<sup>Required</sup> <a name="extendParam" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.extendParam"></a>

```typescript
public readonly extendParam: string;
```

- *Type:* string

---

##### `extendParams`<sup>Required</sup> <a name="extendParams" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.extendParams"></a>

```typescript
public readonly extendParams: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hwPassthrough`<sup>Required</sup> <a name="hwPassthrough" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.hwPassthrough"></a>

```typescript
public readonly hwPassthrough: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `kmsId`<sup>Required</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.kmsId"></a>

```typescript
public readonly kmsId: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.volumetype"></a>

```typescript
public readonly volumetype: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CceNodeAttachV3DataVolumes;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumes">CceNodeAttachV3DataVolumes</a>

---


### CceNodeAttachV3RootVolumeList <a name="CceNodeAttachV3RootVolumeList" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeAttachV3.CceNodeAttachV3RootVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.get"></a>

```typescript
public get(index: number): CceNodeAttachV3RootVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CceNodeAttachV3RootVolumeOutputReference <a name="CceNodeAttachV3RootVolumeOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.extendParam">extendParam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.extendParams">extendParams</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.kmsId">kmsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.volumetype">volumetype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolume">CceNodeAttachV3RootVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extendParam`<sup>Required</sup> <a name="extendParam" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.extendParam"></a>

```typescript
public readonly extendParam: string;
```

- *Type:* string

---

##### `extendParams`<sup>Required</sup> <a name="extendParams" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.extendParams"></a>

```typescript
public readonly extendParams: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `kmsId`<sup>Required</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.kmsId"></a>

```typescript
public readonly kmsId: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.volumetype"></a>

```typescript
public readonly volumetype: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CceNodeAttachV3RootVolume;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolume">CceNodeAttachV3RootVolume</a>

---


### CceNodeAttachV3StorageGroupsList <a name="CceNodeAttachV3StorageGroupsList" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeAttachV3.CceNodeAttachV3StorageGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.get"></a>

```typescript
public get(index: number): CceNodeAttachV3StorageGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CceNodeAttachV3StorageGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a>[]

---


### CceNodeAttachV3StorageGroupsOutputReference <a name="CceNodeAttachV3StorageGroupsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.putVirtualSpaces">putVirtualSpaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.resetCceManaged">resetCceManaged</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVirtualSpaces` <a name="putVirtualSpaces" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.putVirtualSpaces"></a>

```typescript
public putVirtualSpaces(value: IResolvable | CceNodeAttachV3StorageGroupsVirtualSpaces[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.putVirtualSpaces.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces">CceNodeAttachV3StorageGroupsVirtualSpaces</a>[]

---

##### `resetCceManaged` <a name="resetCceManaged" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.resetCceManaged"></a>

```typescript
public resetCceManaged(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.virtualSpaces">virtualSpaces</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList">CceNodeAttachV3StorageGroupsVirtualSpacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.cceManagedInput">cceManagedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.selectorNamesInput">selectorNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.virtualSpacesInput">virtualSpacesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces">CceNodeAttachV3StorageGroupsVirtualSpaces</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.cceManaged">cceManaged</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.selectorNames">selectorNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `virtualSpaces`<sup>Required</sup> <a name="virtualSpaces" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.virtualSpaces"></a>

```typescript
public readonly virtualSpaces: CceNodeAttachV3StorageGroupsVirtualSpacesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList">CceNodeAttachV3StorageGroupsVirtualSpacesList</a>

---

##### `cceManagedInput`<sup>Optional</sup> <a name="cceManagedInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.cceManagedInput"></a>

```typescript
public readonly cceManagedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `selectorNamesInput`<sup>Optional</sup> <a name="selectorNamesInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.selectorNamesInput"></a>

```typescript
public readonly selectorNamesInput: string[];
```

- *Type:* string[]

---

##### `virtualSpacesInput`<sup>Optional</sup> <a name="virtualSpacesInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.virtualSpacesInput"></a>

```typescript
public readonly virtualSpacesInput: IResolvable | CceNodeAttachV3StorageGroupsVirtualSpaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces">CceNodeAttachV3StorageGroupsVirtualSpaces</a>[]

---

##### `cceManaged`<sup>Required</sup> <a name="cceManaged" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.cceManaged"></a>

```typescript
public readonly cceManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `selectorNames`<sup>Required</sup> <a name="selectorNames" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.selectorNames"></a>

```typescript
public readonly selectorNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CceNodeAttachV3StorageGroups;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a>

---


### CceNodeAttachV3StorageGroupsVirtualSpacesList <a name="CceNodeAttachV3StorageGroupsVirtualSpacesList" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.get"></a>

```typescript
public get(index: number): CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces">CceNodeAttachV3StorageGroupsVirtualSpaces</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CceNodeAttachV3StorageGroupsVirtualSpaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces">CceNodeAttachV3StorageGroupsVirtualSpaces</a>[]

---


### CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference <a name="CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.resetLvmLvType">resetLvmLvType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.resetLvmPath">resetLvmPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.resetRuntimeLvType">resetRuntimeLvType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLvmLvType` <a name="resetLvmLvType" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.resetLvmLvType"></a>

```typescript
public resetLvmLvType(): void
```

##### `resetLvmPath` <a name="resetLvmPath" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.resetLvmPath"></a>

```typescript
public resetLvmPath(): void
```

##### `resetRuntimeLvType` <a name="resetRuntimeLvType" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.resetRuntimeLvType"></a>

```typescript
public resetRuntimeLvType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.lvmLvTypeInput">lvmLvTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.lvmPathInput">lvmPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.runtimeLvTypeInput">runtimeLvTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.sizeInput">sizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.lvmLvType">lvmLvType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.lvmPath">lvmPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.runtimeLvType">runtimeLvType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces">CceNodeAttachV3StorageGroupsVirtualSpaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lvmLvTypeInput`<sup>Optional</sup> <a name="lvmLvTypeInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.lvmLvTypeInput"></a>

```typescript
public readonly lvmLvTypeInput: string;
```

- *Type:* string

---

##### `lvmPathInput`<sup>Optional</sup> <a name="lvmPathInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.lvmPathInput"></a>

```typescript
public readonly lvmPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `runtimeLvTypeInput`<sup>Optional</sup> <a name="runtimeLvTypeInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.runtimeLvTypeInput"></a>

```typescript
public readonly runtimeLvTypeInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: string;
```

- *Type:* string

---

##### `lvmLvType`<sup>Required</sup> <a name="lvmLvType" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.lvmLvType"></a>

```typescript
public readonly lvmLvType: string;
```

- *Type:* string

---

##### `lvmPath`<sup>Required</sup> <a name="lvmPath" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.lvmPath"></a>

```typescript
public readonly lvmPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runtimeLvType`<sup>Required</sup> <a name="runtimeLvType" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.runtimeLvType"></a>

```typescript
public readonly runtimeLvType: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CceNodeAttachV3StorageGroupsVirtualSpaces;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces">CceNodeAttachV3StorageGroupsVirtualSpaces</a>

---


### CceNodeAttachV3StorageOutputReference <a name="CceNodeAttachV3StorageOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeAttachV3.CceNodeAttachV3StorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.putGroups">putGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.putSelectors">putSelectors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroups` <a name="putGroups" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.putGroups"></a>

```typescript
public putGroups(value: IResolvable | CceNodeAttachV3StorageGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.putGroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a>[]

---

##### `putSelectors` <a name="putSelectors" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.putSelectors"></a>

```typescript
public putSelectors(value: IResolvable | CceNodeAttachV3StorageSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.putSelectors.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.groups">groups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList">CceNodeAttachV3StorageGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList">CceNodeAttachV3StorageSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.groupsInput">groupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.selectorsInput">selectorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage">CceNodeAttachV3Storage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.groups"></a>

```typescript
public readonly groups: CceNodeAttachV3StorageGroupsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList">CceNodeAttachV3StorageGroupsList</a>

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.selectors"></a>

```typescript
public readonly selectors: CceNodeAttachV3StorageSelectorsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList">CceNodeAttachV3StorageSelectorsList</a>

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.groupsInput"></a>

```typescript
public readonly groupsInput: IResolvable | CceNodeAttachV3StorageGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a>[]

---

##### `selectorsInput`<sup>Optional</sup> <a name="selectorsInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.selectorsInput"></a>

```typescript
public readonly selectorsInput: IResolvable | CceNodeAttachV3StorageSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CceNodeAttachV3Storage;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage">CceNodeAttachV3Storage</a>

---


### CceNodeAttachV3StorageSelectorsList <a name="CceNodeAttachV3StorageSelectorsList" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.get"></a>

```typescript
public get(index: number): CceNodeAttachV3StorageSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CceNodeAttachV3StorageSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a>[]

---


### CceNodeAttachV3StorageSelectorsOutputReference <a name="CceNodeAttachV3StorageSelectorsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelCount">resetMatchLabelCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelMetadataCmkid">resetMatchLabelMetadataCmkid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelMetadataEncrypted">resetMatchLabelMetadataEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelSize">resetMatchLabelSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelVolumeType">resetMatchLabelVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchLabelCount` <a name="resetMatchLabelCount" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelCount"></a>

```typescript
public resetMatchLabelCount(): void
```

##### `resetMatchLabelMetadataCmkid` <a name="resetMatchLabelMetadataCmkid" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelMetadataCmkid"></a>

```typescript
public resetMatchLabelMetadataCmkid(): void
```

##### `resetMatchLabelMetadataEncrypted` <a name="resetMatchLabelMetadataEncrypted" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelMetadataEncrypted"></a>

```typescript
public resetMatchLabelMetadataEncrypted(): void
```

##### `resetMatchLabelSize` <a name="resetMatchLabelSize" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelSize"></a>

```typescript
public resetMatchLabelSize(): void
```

##### `resetMatchLabelVolumeType` <a name="resetMatchLabelVolumeType" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelVolumeType"></a>

```typescript
public resetMatchLabelVolumeType(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelCountInput">matchLabelCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelMetadataCmkidInput">matchLabelMetadataCmkidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelMetadataEncryptedInput">matchLabelMetadataEncryptedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelSizeInput">matchLabelSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelVolumeTypeInput">matchLabelVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelCount">matchLabelCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelMetadataCmkid">matchLabelMetadataCmkid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelMetadataEncrypted">matchLabelMetadataEncrypted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelSize">matchLabelSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelVolumeType">matchLabelVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchLabelCountInput`<sup>Optional</sup> <a name="matchLabelCountInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelCountInput"></a>

```typescript
public readonly matchLabelCountInput: string;
```

- *Type:* string

---

##### `matchLabelMetadataCmkidInput`<sup>Optional</sup> <a name="matchLabelMetadataCmkidInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelMetadataCmkidInput"></a>

```typescript
public readonly matchLabelMetadataCmkidInput: string;
```

- *Type:* string

---

##### `matchLabelMetadataEncryptedInput`<sup>Optional</sup> <a name="matchLabelMetadataEncryptedInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelMetadataEncryptedInput"></a>

```typescript
public readonly matchLabelMetadataEncryptedInput: string;
```

- *Type:* string

---

##### `matchLabelSizeInput`<sup>Optional</sup> <a name="matchLabelSizeInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelSizeInput"></a>

```typescript
public readonly matchLabelSizeInput: string;
```

- *Type:* string

---

##### `matchLabelVolumeTypeInput`<sup>Optional</sup> <a name="matchLabelVolumeTypeInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelVolumeTypeInput"></a>

```typescript
public readonly matchLabelVolumeTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `matchLabelCount`<sup>Required</sup> <a name="matchLabelCount" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelCount"></a>

```typescript
public readonly matchLabelCount: string;
```

- *Type:* string

---

##### `matchLabelMetadataCmkid`<sup>Required</sup> <a name="matchLabelMetadataCmkid" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelMetadataCmkid"></a>

```typescript
public readonly matchLabelMetadataCmkid: string;
```

- *Type:* string

---

##### `matchLabelMetadataEncrypted`<sup>Required</sup> <a name="matchLabelMetadataEncrypted" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelMetadataEncrypted"></a>

```typescript
public readonly matchLabelMetadataEncrypted: string;
```

- *Type:* string

---

##### `matchLabelSize`<sup>Required</sup> <a name="matchLabelSize" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelSize"></a>

```typescript
public readonly matchLabelSize: string;
```

- *Type:* string

---

##### `matchLabelVolumeType`<sup>Required</sup> <a name="matchLabelVolumeType" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelVolumeType"></a>

```typescript
public readonly matchLabelVolumeType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CceNodeAttachV3StorageSelectors;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a>

---


### CceNodeAttachV3TaintsList <a name="CceNodeAttachV3TaintsList" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeAttachV3.CceNodeAttachV3TaintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.get"></a>

```typescript
public get(index: number): CceNodeAttachV3TaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CceNodeAttachV3Taints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>[]

---


### CceNodeAttachV3TaintsOutputReference <a name="CceNodeAttachV3TaintsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CceNodeAttachV3Taints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>

---


### CceNodeAttachV3TimeoutsOutputReference <a name="CceNodeAttachV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.Initializer"></a>

```typescript
import { cceNodeAttachV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts">CceNodeAttachV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CceNodeAttachV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts">CceNodeAttachV3Timeouts</a>

---



