# `cceNodePoolV3` Submodule <a name="`cceNodePoolV3` Submodule" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CceNodePoolV3 <a name="CceNodePoolV3" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3 opentelekomcloud_cce_node_pool_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer"></a>

```typescript
import { cceNodePoolV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodePoolV3.CceNodePoolV3(scope: Construct, id: string, config: CceNodePoolV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config">CceNodePoolV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config">CceNodePoolV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putDataVolumes">putDataVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putRootVolume">putRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetAgencyName">resetAgencyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetDockerBaseSize">resetDockerBaseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetDockerLvmConfigOverride">resetDockerLvmConfigOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetK8STags">resetK8STags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetKeyPair">resetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMaxNodeCount">resetMaxNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMaxPods">resetMaxPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMinNodeCount">resetMinNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetOs">resetOs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPostinstall">resetPostinstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPreinstall">resetPreinstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetScaleDownCooldownTime">resetScaleDownCooldownTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetScaleEnable">resetScaleEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetServerGroupReference">resetServerGroupReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetTaints">resetTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetUserTags">resetUserTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataVolumes` <a name="putDataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putDataVolumes"></a>

```typescript
public putDataVolumes(value: IResolvable | CceNodePoolV3DataVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putDataVolumes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>[]

---

##### `putRootVolume` <a name="putRootVolume" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putRootVolume"></a>

```typescript
public putRootVolume(value: CceNodePoolV3RootVolume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a>

---

##### `putTaints` <a name="putTaints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTaints"></a>

```typescript
public putTaints(value: IResolvable | CceNodePoolV3Taints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTaints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTimeouts"></a>

```typescript
public putTimeouts(value: CceNodePoolV3Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a>

---

##### `resetAgencyName` <a name="resetAgencyName" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetAgencyName"></a>

```typescript
public resetAgencyName(): void
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetDockerBaseSize` <a name="resetDockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetDockerBaseSize"></a>

```typescript
public resetDockerBaseSize(): void
```

##### `resetDockerLvmConfigOverride` <a name="resetDockerLvmConfigOverride" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetDockerLvmConfigOverride"></a>

```typescript
public resetDockerLvmConfigOverride(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetK8STags` <a name="resetK8STags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetK8STags"></a>

```typescript
public resetK8STags(): void
```

##### `resetKeyPair` <a name="resetKeyPair" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetKeyPair"></a>

```typescript
public resetKeyPair(): void
```

##### `resetMaxNodeCount` <a name="resetMaxNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMaxNodeCount"></a>

```typescript
public resetMaxNodeCount(): void
```

##### `resetMaxPods` <a name="resetMaxPods" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMaxPods"></a>

```typescript
public resetMaxPods(): void
```

##### `resetMinNodeCount` <a name="resetMinNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMinNodeCount"></a>

```typescript
public resetMinNodeCount(): void
```

##### `resetOs` <a name="resetOs" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetOs"></a>

```typescript
public resetOs(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPostinstall` <a name="resetPostinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPostinstall"></a>

```typescript
public resetPostinstall(): void
```

##### `resetPreinstall` <a name="resetPreinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPreinstall"></a>

```typescript
public resetPreinstall(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetRuntime"></a>

```typescript
public resetRuntime(): void
```

##### `resetScaleDownCooldownTime` <a name="resetScaleDownCooldownTime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetScaleDownCooldownTime"></a>

```typescript
public resetScaleDownCooldownTime(): void
```

##### `resetScaleEnable` <a name="resetScaleEnable" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetScaleEnable"></a>

```typescript
public resetScaleEnable(): void
```

##### `resetServerGroupReference` <a name="resetServerGroupReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetServerGroupReference"></a>

```typescript
public resetServerGroupReference(): void
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetStorage"></a>

```typescript
public resetStorage(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetTaints"></a>

```typescript
public resetTaints(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserTags` <a name="resetUserTags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetUserTags"></a>

```typescript
public resetUserTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CceNodePoolV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isConstruct"></a>

```typescript
import { cceNodePoolV3 } from '@cdktf/provider-opentelekomcloud'

cceNodePoolV3.CceNodePoolV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformElement"></a>

```typescript
import { cceNodePoolV3 } from '@cdktf/provider-opentelekomcloud'

cceNodePoolV3.CceNodePoolV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformResource"></a>

```typescript
import { cceNodePoolV3 } from '@cdktf/provider-opentelekomcloud'

cceNodePoolV3.CceNodePoolV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.generateConfigForImport"></a>

```typescript
import { cceNodePoolV3 } from '@cdktf/provider-opentelekomcloud'

cceNodePoolV3.CceNodePoolV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CceNodePoolV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CceNodePoolV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CceNodePoolV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CceNodePoolV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dataVolumes">dataVolumes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList">CceNodePoolV3DataVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference">CceNodePoolV3RootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList">CceNodePoolV3TaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference">CceNodePoolV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.agencyNameInput">agencyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dataVolumesInput">dataVolumesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerBaseSizeInput">dockerBaseSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerLvmConfigOverrideInput">dockerLvmConfigOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.flavorInput">flavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.initialNodeCountInput">initialNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.k8STagsInput">k8STagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.keyPairInput">keyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxPodsInput">maxPodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.minNodeCountInput">minNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.osInput">osInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.postinstallInput">postinstallInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.preinstallInput">preinstallInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.rootVolumeInput">rootVolumeInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleDownCooldownTimeInput">scaleDownCooldownTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleEnableInput">scaleEnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.serverGroupReferenceInput">serverGroupReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.storageInput">storageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.taintsInput">taintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.userTagsInput">userTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.agencyName">agencyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerBaseSize">dockerBaseSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerLvmConfigOverride">dockerLvmConfigOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.flavor">flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.initialNodeCount">initialNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.k8STags">k8STags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.keyPair">keyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxPods">maxPods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.os">os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.postinstall">postinstall</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.preinstall">preinstall</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleDownCooldownTime">scaleDownCooldownTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleEnable">scaleEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.serverGroupReference">serverGroupReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.storage">storage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.userTags">userTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataVolumes`<sup>Required</sup> <a name="dataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dataVolumes"></a>

```typescript
public readonly dataVolumes: CceNodePoolV3DataVolumesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList">CceNodePoolV3DataVolumesList</a>

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.rootVolume"></a>

```typescript
public readonly rootVolume: CceNodePoolV3RootVolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference">CceNodePoolV3RootVolumeOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.taints"></a>

```typescript
public readonly taints: CceNodePoolV3TaintsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList">CceNodePoolV3TaintsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.timeouts"></a>

```typescript
public readonly timeouts: CceNodePoolV3TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference">CceNodePoolV3TimeoutsOutputReference</a>

---

##### `agencyNameInput`<sup>Optional</sup> <a name="agencyNameInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.agencyNameInput"></a>

```typescript
public readonly agencyNameInput: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `dataVolumesInput`<sup>Optional</sup> <a name="dataVolumesInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dataVolumesInput"></a>

```typescript
public readonly dataVolumesInput: IResolvable | CceNodePoolV3DataVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>[]

---

##### `dockerBaseSizeInput`<sup>Optional</sup> <a name="dockerBaseSizeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerBaseSizeInput"></a>

```typescript
public readonly dockerBaseSizeInput: number;
```

- *Type:* number

---

##### `dockerLvmConfigOverrideInput`<sup>Optional</sup> <a name="dockerLvmConfigOverrideInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerLvmConfigOverrideInput"></a>

```typescript
public readonly dockerLvmConfigOverrideInput: string;
```

- *Type:* string

---

##### `flavorInput`<sup>Optional</sup> <a name="flavorInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.flavorInput"></a>

```typescript
public readonly flavorInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialNodeCountInput`<sup>Optional</sup> <a name="initialNodeCountInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.initialNodeCountInput"></a>

```typescript
public readonly initialNodeCountInput: number;
```

- *Type:* number

---

##### `k8STagsInput`<sup>Optional</sup> <a name="k8STagsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.k8STagsInput"></a>

```typescript
public readonly k8STagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keyPairInput`<sup>Optional</sup> <a name="keyPairInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.keyPairInput"></a>

```typescript
public readonly keyPairInput: string;
```

- *Type:* string

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxNodeCountInput"></a>

```typescript
public readonly maxNodeCountInput: number;
```

- *Type:* number

---

##### `maxPodsInput`<sup>Optional</sup> <a name="maxPodsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxPodsInput"></a>

```typescript
public readonly maxPodsInput: number;
```

- *Type:* number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.minNodeCountInput"></a>

```typescript
public readonly minNodeCountInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `osInput`<sup>Optional</sup> <a name="osInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.osInput"></a>

```typescript
public readonly osInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `postinstallInput`<sup>Optional</sup> <a name="postinstallInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.postinstallInput"></a>

```typescript
public readonly postinstallInput: string;
```

- *Type:* string

---

##### `preinstallInput`<sup>Optional</sup> <a name="preinstallInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.preinstallInput"></a>

```typescript
public readonly preinstallInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `rootVolumeInput`<sup>Optional</sup> <a name="rootVolumeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.rootVolumeInput"></a>

```typescript
public readonly rootVolumeInput: CceNodePoolV3RootVolume;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a>

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `scaleDownCooldownTimeInput`<sup>Optional</sup> <a name="scaleDownCooldownTimeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleDownCooldownTimeInput"></a>

```typescript
public readonly scaleDownCooldownTimeInput: number;
```

- *Type:* number

---

##### `scaleEnableInput`<sup>Optional</sup> <a name="scaleEnableInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleEnableInput"></a>

```typescript
public readonly scaleEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverGroupReferenceInput`<sup>Optional</sup> <a name="serverGroupReferenceInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.serverGroupReferenceInput"></a>

```typescript
public readonly serverGroupReferenceInput: string;
```

- *Type:* string

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.storageInput"></a>

```typescript
public readonly storageInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.taintsInput"></a>

```typescript
public readonly taintsInput: IResolvable | CceNodePoolV3Taints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CceNodePoolV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a>

---

##### `userTagsInput`<sup>Optional</sup> <a name="userTagsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.userTagsInput"></a>

```typescript
public readonly userTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `agencyName`<sup>Required</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.agencyName"></a>

```typescript
public readonly agencyName: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `dockerBaseSize`<sup>Required</sup> <a name="dockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerBaseSize"></a>

```typescript
public readonly dockerBaseSize: number;
```

- *Type:* number

---

##### `dockerLvmConfigOverride`<sup>Required</sup> <a name="dockerLvmConfigOverride" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerLvmConfigOverride"></a>

```typescript
public readonly dockerLvmConfigOverride: string;
```

- *Type:* string

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialNodeCount`<sup>Required</sup> <a name="initialNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.initialNodeCount"></a>

```typescript
public readonly initialNodeCount: number;
```

- *Type:* number

---

##### `k8STags`<sup>Required</sup> <a name="k8STags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.k8STags"></a>

```typescript
public readonly k8STags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.keyPair"></a>

```typescript
public readonly keyPair: string;
```

- *Type:* string

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

---

##### `maxPods`<sup>Required</sup> <a name="maxPods" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxPods"></a>

```typescript
public readonly maxPods: number;
```

- *Type:* number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `postinstall`<sup>Required</sup> <a name="postinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.postinstall"></a>

```typescript
public readonly postinstall: string;
```

- *Type:* string

---

##### `preinstall`<sup>Required</sup> <a name="preinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.preinstall"></a>

```typescript
public readonly preinstall: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `scaleDownCooldownTime`<sup>Required</sup> <a name="scaleDownCooldownTime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleDownCooldownTime"></a>

```typescript
public readonly scaleDownCooldownTime: number;
```

- *Type:* number

---

##### `scaleEnable`<sup>Required</sup> <a name="scaleEnable" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleEnable"></a>

```typescript
public readonly scaleEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverGroupReference`<sup>Required</sup> <a name="serverGroupReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.serverGroupReference"></a>

```typescript
public readonly serverGroupReference: string;
```

- *Type:* string

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.storage"></a>

```typescript
public readonly storage: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `userTags`<sup>Required</sup> <a name="userTags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.userTags"></a>

```typescript
public readonly userTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CceNodePoolV3Config <a name="CceNodePoolV3Config" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.Initializer"></a>

```typescript
import { cceNodePoolV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodePoolV3Config: cceNodePoolV3.CceNodePoolV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#cluster_id CceNodePoolV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dataVolumes">dataVolumes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>[]</code> | data_volumes block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.flavor">flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#flavor CceNodePoolV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.initialNodeCount">initialNodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#initial_node_count CceNodePoolV3#initial_node_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#name CceNodePoolV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.agencyName">agencyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#agency_name CceNodePoolV3#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#availability_zone CceNodePoolV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dockerBaseSize">dockerBaseSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#docker_base_size CceNodePoolV3#docker_base_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dockerLvmConfigOverride">dockerLvmConfigOverride</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#docker_lvm_config_override CceNodePoolV3#docker_lvm_config_override}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#id CceNodePoolV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.k8STags">k8STags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#k8s_tags CceNodePoolV3#k8s_tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.keyPair">keyPair</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#key_pair CceNodePoolV3#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#max_node_count CceNodePoolV3#max_node_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.maxPods">maxPods</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#max_pods CceNodePoolV3#max_pods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#min_node_count CceNodePoolV3#min_node_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.os">os</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#os CceNodePoolV3#os}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#password CceNodePoolV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.postinstall">postinstall</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#postinstall CceNodePoolV3#postinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.preinstall">preinstall</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#preinstall CceNodePoolV3#preinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#priority CceNodePoolV3#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.runtime">runtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#runtime CceNodePoolV3#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.scaleDownCooldownTime">scaleDownCooldownTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#scale_down_cooldown_time CceNodePoolV3#scale_down_cooldown_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.scaleEnable">scaleEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#scale_enable CceNodePoolV3#scale_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.serverGroupReference">serverGroupReference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#server_group_reference CceNodePoolV3#server_group_reference}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.storage">storage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#storage CceNodePoolV3#storage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#subnet_id CceNodePoolV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.taints">taints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>[]</code> | taints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.userTags">userTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#user_tags CceNodePoolV3#user_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#cluster_id CceNodePoolV3#cluster_id}.

---

##### `dataVolumes`<sup>Required</sup> <a name="dataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dataVolumes"></a>

```typescript
public readonly dataVolumes: IResolvable | CceNodePoolV3DataVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>[]

data_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#data_volumes CceNodePoolV3#data_volumes}

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#flavor CceNodePoolV3#flavor}.

---

##### `initialNodeCount`<sup>Required</sup> <a name="initialNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.initialNodeCount"></a>

```typescript
public readonly initialNodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#initial_node_count CceNodePoolV3#initial_node_count}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#name CceNodePoolV3#name}.

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.rootVolume"></a>

```typescript
public readonly rootVolume: CceNodePoolV3RootVolume;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#root_volume CceNodePoolV3#root_volume}

---

##### `agencyName`<sup>Optional</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.agencyName"></a>

```typescript
public readonly agencyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#agency_name CceNodePoolV3#agency_name}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#availability_zone CceNodePoolV3#availability_zone}.

---

##### `dockerBaseSize`<sup>Optional</sup> <a name="dockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dockerBaseSize"></a>

```typescript
public readonly dockerBaseSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#docker_base_size CceNodePoolV3#docker_base_size}.

---

##### `dockerLvmConfigOverride`<sup>Optional</sup> <a name="dockerLvmConfigOverride" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dockerLvmConfigOverride"></a>

```typescript
public readonly dockerLvmConfigOverride: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#docker_lvm_config_override CceNodePoolV3#docker_lvm_config_override}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#id CceNodePoolV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `k8STags`<sup>Optional</sup> <a name="k8STags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.k8STags"></a>

```typescript
public readonly k8STags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#k8s_tags CceNodePoolV3#k8s_tags}.

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.keyPair"></a>

```typescript
public readonly keyPair: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#key_pair CceNodePoolV3#key_pair}.

---

##### `maxNodeCount`<sup>Optional</sup> <a name="maxNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#max_node_count CceNodePoolV3#max_node_count}.

---

##### `maxPods`<sup>Optional</sup> <a name="maxPods" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.maxPods"></a>

```typescript
public readonly maxPods: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#max_pods CceNodePoolV3#max_pods}.

---

##### `minNodeCount`<sup>Optional</sup> <a name="minNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#min_node_count CceNodePoolV3#min_node_count}.

---

##### `os`<sup>Optional</sup> <a name="os" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#os CceNodePoolV3#os}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#password CceNodePoolV3#password}.

---

##### `postinstall`<sup>Optional</sup> <a name="postinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.postinstall"></a>

```typescript
public readonly postinstall: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#postinstall CceNodePoolV3#postinstall}.

---

##### `preinstall`<sup>Optional</sup> <a name="preinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.preinstall"></a>

```typescript
public readonly preinstall: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#preinstall CceNodePoolV3#preinstall}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#priority CceNodePoolV3#priority}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#runtime CceNodePoolV3#runtime}.

---

##### `scaleDownCooldownTime`<sup>Optional</sup> <a name="scaleDownCooldownTime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.scaleDownCooldownTime"></a>

```typescript
public readonly scaleDownCooldownTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#scale_down_cooldown_time CceNodePoolV3#scale_down_cooldown_time}.

---

##### `scaleEnable`<sup>Optional</sup> <a name="scaleEnable" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.scaleEnable"></a>

```typescript
public readonly scaleEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#scale_enable CceNodePoolV3#scale_enable}.

---

##### `serverGroupReference`<sup>Optional</sup> <a name="serverGroupReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.serverGroupReference"></a>

```typescript
public readonly serverGroupReference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#server_group_reference CceNodePoolV3#server_group_reference}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.storage"></a>

```typescript
public readonly storage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#storage CceNodePoolV3#storage}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#subnet_id CceNodePoolV3#subnet_id}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.taints"></a>

```typescript
public readonly taints: IResolvable | CceNodePoolV3Taints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>[]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#taints CceNodePoolV3#taints}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.timeouts"></a>

```typescript
public readonly timeouts: CceNodePoolV3Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#timeouts CceNodePoolV3#timeouts}

---

##### `userTags`<sup>Optional</sup> <a name="userTags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.userTags"></a>

```typescript
public readonly userTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#user_tags CceNodePoolV3#user_tags}.

---

### CceNodePoolV3DataVolumes <a name="CceNodePoolV3DataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.Initializer"></a>

```typescript
import { cceNodePoolV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodePoolV3DataVolumes: cceNodePoolV3.CceNodePoolV3DataVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#size CceNodePoolV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.volumetype">volumetype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#volumetype CceNodePoolV3#volumetype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.extendParam">extendParam</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#extend_param CceNodePoolV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.extendParams">extendParams</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#extend_params CceNodePoolV3#extend_params}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.kmsId">kmsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#kms_id CceNodePoolV3#kms_id}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#size CceNodePoolV3#size}.

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.volumetype"></a>

```typescript
public readonly volumetype: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#volumetype CceNodePoolV3#volumetype}.

---

##### `extendParam`<sup>Optional</sup> <a name="extendParam" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.extendParam"></a>

```typescript
public readonly extendParam: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#extend_param CceNodePoolV3#extend_param}.

---

##### `extendParams`<sup>Optional</sup> <a name="extendParams" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.extendParams"></a>

```typescript
public readonly extendParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#extend_params CceNodePoolV3#extend_params}.

---

##### `kmsId`<sup>Optional</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.kmsId"></a>

```typescript
public readonly kmsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#kms_id CceNodePoolV3#kms_id}.

---

### CceNodePoolV3RootVolume <a name="CceNodePoolV3RootVolume" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.Initializer"></a>

```typescript
import { cceNodePoolV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodePoolV3RootVolume: cceNodePoolV3.CceNodePoolV3RootVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#size CceNodePoolV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.volumetype">volumetype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#volumetype CceNodePoolV3#volumetype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.extendParam">extendParam</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#extend_param CceNodePoolV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.extendParams">extendParams</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#extend_params CceNodePoolV3#extend_params}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.kmsId">kmsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#kms_id CceNodePoolV3#kms_id}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#size CceNodePoolV3#size}.

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.volumetype"></a>

```typescript
public readonly volumetype: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#volumetype CceNodePoolV3#volumetype}.

---

##### `extendParam`<sup>Optional</sup> <a name="extendParam" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.extendParam"></a>

```typescript
public readonly extendParam: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#extend_param CceNodePoolV3#extend_param}.

---

##### `extendParams`<sup>Optional</sup> <a name="extendParams" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.extendParams"></a>

```typescript
public readonly extendParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#extend_params CceNodePoolV3#extend_params}.

---

##### `kmsId`<sup>Optional</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.kmsId"></a>

```typescript
public readonly kmsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#kms_id CceNodePoolV3#kms_id}.

---

### CceNodePoolV3Taints <a name="CceNodePoolV3Taints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.Initializer"></a>

```typescript
import { cceNodePoolV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodePoolV3Taints: cceNodePoolV3.CceNodePoolV3Taints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.effect">effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#effect CceNodePoolV3#effect}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#key CceNodePoolV3#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#value CceNodePoolV3#value}. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#effect CceNodePoolV3#effect}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#key CceNodePoolV3#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#value CceNodePoolV3#value}.

---

### CceNodePoolV3Timeouts <a name="CceNodePoolV3Timeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.Initializer"></a>

```typescript
import { cceNodePoolV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodePoolV3Timeouts: cceNodePoolV3.CceNodePoolV3Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#create CceNodePoolV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#default CceNodePoolV3#default}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#delete CceNodePoolV3#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#update CceNodePoolV3#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#create CceNodePoolV3#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#default CceNodePoolV3#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#delete CceNodePoolV3#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/resources/cce_node_pool_v3#update CceNodePoolV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CceNodePoolV3DataVolumesList <a name="CceNodePoolV3DataVolumesList" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer"></a>

```typescript
import { cceNodePoolV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodePoolV3.CceNodePoolV3DataVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.get"></a>

```typescript
public get(index: number): CceNodePoolV3DataVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CceNodePoolV3DataVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>[]

---


### CceNodePoolV3DataVolumesOutputReference <a name="CceNodePoolV3DataVolumesOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer"></a>

```typescript
import { cceNodePoolV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetExtendParam">resetExtendParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetExtendParams">resetExtendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetKmsId">resetKmsId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExtendParam` <a name="resetExtendParam" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetExtendParam"></a>

```typescript
public resetExtendParam(): void
```

##### `resetExtendParams` <a name="resetExtendParams" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetExtendParams"></a>

```typescript
public resetExtendParams(): void
```

##### `resetKmsId` <a name="resetKmsId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetKmsId"></a>

```typescript
public resetKmsId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParamInput">extendParamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParamsInput">extendParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.kmsIdInput">kmsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.volumetypeInput">volumetypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParam">extendParam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParams">extendParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.kmsId">kmsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.volumetype">volumetype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extendParamInput`<sup>Optional</sup> <a name="extendParamInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParamInput"></a>

```typescript
public readonly extendParamInput: string;
```

- *Type:* string

---

##### `extendParamsInput`<sup>Optional</sup> <a name="extendParamsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParamsInput"></a>

```typescript
public readonly extendParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `kmsIdInput`<sup>Optional</sup> <a name="kmsIdInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.kmsIdInput"></a>

```typescript
public readonly kmsIdInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `volumetypeInput`<sup>Optional</sup> <a name="volumetypeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.volumetypeInput"></a>

```typescript
public readonly volumetypeInput: string;
```

- *Type:* string

---

##### `extendParam`<sup>Required</sup> <a name="extendParam" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParam"></a>

```typescript
public readonly extendParam: string;
```

- *Type:* string

---

##### `extendParams`<sup>Required</sup> <a name="extendParams" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParams"></a>

```typescript
public readonly extendParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `kmsId`<sup>Required</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.kmsId"></a>

```typescript
public readonly kmsId: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.volumetype"></a>

```typescript
public readonly volumetype: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CceNodePoolV3DataVolumes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>

---


### CceNodePoolV3RootVolumeOutputReference <a name="CceNodePoolV3RootVolumeOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer"></a>

```typescript
import { cceNodePoolV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetExtendParam">resetExtendParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetExtendParams">resetExtendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetKmsId">resetKmsId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExtendParam` <a name="resetExtendParam" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetExtendParam"></a>

```typescript
public resetExtendParam(): void
```

##### `resetExtendParams` <a name="resetExtendParams" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetExtendParams"></a>

```typescript
public resetExtendParams(): void
```

##### `resetKmsId` <a name="resetKmsId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetKmsId"></a>

```typescript
public resetKmsId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParamInput">extendParamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParamsInput">extendParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.kmsIdInput">kmsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.volumetypeInput">volumetypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParam">extendParam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParams">extendParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.kmsId">kmsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.volumetype">volumetype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extendParamInput`<sup>Optional</sup> <a name="extendParamInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParamInput"></a>

```typescript
public readonly extendParamInput: string;
```

- *Type:* string

---

##### `extendParamsInput`<sup>Optional</sup> <a name="extendParamsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParamsInput"></a>

```typescript
public readonly extendParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `kmsIdInput`<sup>Optional</sup> <a name="kmsIdInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.kmsIdInput"></a>

```typescript
public readonly kmsIdInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `volumetypeInput`<sup>Optional</sup> <a name="volumetypeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.volumetypeInput"></a>

```typescript
public readonly volumetypeInput: string;
```

- *Type:* string

---

##### `extendParam`<sup>Required</sup> <a name="extendParam" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParam"></a>

```typescript
public readonly extendParam: string;
```

- *Type:* string

---

##### `extendParams`<sup>Required</sup> <a name="extendParams" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParams"></a>

```typescript
public readonly extendParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `kmsId`<sup>Required</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.kmsId"></a>

```typescript
public readonly kmsId: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.volumetype"></a>

```typescript
public readonly volumetype: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CceNodePoolV3RootVolume;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a>

---


### CceNodePoolV3TaintsList <a name="CceNodePoolV3TaintsList" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer"></a>

```typescript
import { cceNodePoolV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodePoolV3.CceNodePoolV3TaintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.get"></a>

```typescript
public get(index: number): CceNodePoolV3TaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CceNodePoolV3Taints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>[]

---


### CceNodePoolV3TaintsOutputReference <a name="CceNodePoolV3TaintsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer"></a>

```typescript
import { cceNodePoolV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodePoolV3.CceNodePoolV3TaintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CceNodePoolV3Taints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>

---


### CceNodePoolV3TimeoutsOutputReference <a name="CceNodePoolV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer"></a>

```typescript
import { cceNodePoolV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CceNodePoolV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a>

---



