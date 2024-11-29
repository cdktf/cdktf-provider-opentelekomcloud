# `rmsPolicyAssignmentV1` Submodule <a name="`rmsPolicyAssignmentV1` Submodule" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RmsPolicyAssignmentV1 <a name="RmsPolicyAssignmentV1" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1 opentelekomcloud_rms_policy_assignment_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer"></a>

```typescript
import { rmsPolicyAssignmentV1 } from '@cdktf/provider-opentelekomcloud'

new rmsPolicyAssignmentV1.RmsPolicyAssignmentV1(scope: Construct, id: string, config: RmsPolicyAssignmentV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config">RmsPolicyAssignmentV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config">RmsPolicyAssignmentV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putCustomPolicy">putCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putPolicyFilter">putPolicyFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetCustomPolicy">resetCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetPolicyDefinitionId">resetPolicyDefinitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetPolicyFilter">resetPolicyFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomPolicy` <a name="putCustomPolicy" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putCustomPolicy"></a>

```typescript
public putCustomPolicy(value: RmsPolicyAssignmentV1CustomPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putCustomPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a>

---

##### `putPolicyFilter` <a name="putPolicyFilter" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putPolicyFilter"></a>

```typescript
public putPolicyFilter(value: RmsPolicyAssignmentV1PolicyFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putPolicyFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putTimeouts"></a>

```typescript
public putTimeouts(value: RmsPolicyAssignmentV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts">RmsPolicyAssignmentV1Timeouts</a>

---

##### `resetCustomPolicy` <a name="resetCustomPolicy" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetCustomPolicy"></a>

```typescript
public resetCustomPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetPolicyDefinitionId` <a name="resetPolicyDefinitionId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetPolicyDefinitionId"></a>

```typescript
public resetPolicyDefinitionId(): void
```

##### `resetPolicyFilter` <a name="resetPolicyFilter" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetPolicyFilter"></a>

```typescript
public resetPolicyFilter(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RmsPolicyAssignmentV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isConstruct"></a>

```typescript
import { rmsPolicyAssignmentV1 } from '@cdktf/provider-opentelekomcloud'

rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformElement"></a>

```typescript
import { rmsPolicyAssignmentV1 } from '@cdktf/provider-opentelekomcloud'

rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformResource"></a>

```typescript
import { rmsPolicyAssignmentV1 } from '@cdktf/provider-opentelekomcloud'

rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport"></a>

```typescript
import { rmsPolicyAssignmentV1 } from '@cdktf/provider-opentelekomcloud'

rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RmsPolicyAssignmentV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RmsPolicyAssignmentV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RmsPolicyAssignmentV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RmsPolicyAssignmentV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.customPolicy">customPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference">RmsPolicyAssignmentV1CustomPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyFilter">policyFilter</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference">RmsPolicyAssignmentV1PolicyFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference">RmsPolicyAssignmentV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.customPolicyInput">customPolicyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyDefinitionIdInput">policyDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyFilterInput">policyFilterInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts">RmsPolicyAssignmentV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyDefinitionId">policyDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `customPolicy`<sup>Required</sup> <a name="customPolicy" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.customPolicy"></a>

```typescript
public readonly customPolicy: RmsPolicyAssignmentV1CustomPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference">RmsPolicyAssignmentV1CustomPolicyOutputReference</a>

---

##### `policyFilter`<sup>Required</sup> <a name="policyFilter" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyFilter"></a>

```typescript
public readonly policyFilter: RmsPolicyAssignmentV1PolicyFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference">RmsPolicyAssignmentV1PolicyFilterOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.timeouts"></a>

```typescript
public readonly timeouts: RmsPolicyAssignmentV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference">RmsPolicyAssignmentV1TimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `customPolicyInput`<sup>Optional</sup> <a name="customPolicyInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.customPolicyInput"></a>

```typescript
public readonly customPolicyInput: RmsPolicyAssignmentV1CustomPolicy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `policyDefinitionIdInput`<sup>Optional</sup> <a name="policyDefinitionIdInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyDefinitionIdInput"></a>

```typescript
public readonly policyDefinitionIdInput: string;
```

- *Type:* string

---

##### `policyFilterInput`<sup>Optional</sup> <a name="policyFilterInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyFilterInput"></a>

```typescript
public readonly policyFilterInput: RmsPolicyAssignmentV1PolicyFilter;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RmsPolicyAssignmentV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts">RmsPolicyAssignmentV1Timeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyDefinitionId"></a>

```typescript
public readonly policyDefinitionId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RmsPolicyAssignmentV1Config <a name="RmsPolicyAssignmentV1Config" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.Initializer"></a>

```typescript
import { rmsPolicyAssignmentV1 } from '@cdktf/provider-opentelekomcloud'

const rmsPolicyAssignmentV1Config: rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#name RmsPolicyAssignmentV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.customPolicy">customPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#description RmsPolicyAssignmentV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#id RmsPolicyAssignmentV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#parameters RmsPolicyAssignmentV1#parameters}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.period">period</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#period RmsPolicyAssignmentV1#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.policyDefinitionId">policyDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#policy_definition_id RmsPolicyAssignmentV1#policy_definition_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.policyFilter">policyFilter</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a></code> | policy_filter block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#status RmsPolicyAssignmentV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts">RmsPolicyAssignmentV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#name RmsPolicyAssignmentV1#name}.

---

##### `customPolicy`<sup>Optional</sup> <a name="customPolicy" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.customPolicy"></a>

```typescript
public readonly customPolicy: RmsPolicyAssignmentV1CustomPolicy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#custom_policy RmsPolicyAssignmentV1#custom_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#description RmsPolicyAssignmentV1#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#id RmsPolicyAssignmentV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#parameters RmsPolicyAssignmentV1#parameters}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#period RmsPolicyAssignmentV1#period}.

---

##### `policyDefinitionId`<sup>Optional</sup> <a name="policyDefinitionId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.policyDefinitionId"></a>

```typescript
public readonly policyDefinitionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#policy_definition_id RmsPolicyAssignmentV1#policy_definition_id}.

---

##### `policyFilter`<sup>Optional</sup> <a name="policyFilter" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.policyFilter"></a>

```typescript
public readonly policyFilter: RmsPolicyAssignmentV1PolicyFilter;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a>

policy_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#policy_filter RmsPolicyAssignmentV1#policy_filter}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#status RmsPolicyAssignmentV1#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: RmsPolicyAssignmentV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts">RmsPolicyAssignmentV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#timeouts RmsPolicyAssignmentV1#timeouts}

---

### RmsPolicyAssignmentV1CustomPolicy <a name="RmsPolicyAssignmentV1CustomPolicy" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.Initializer"></a>

```typescript
import { rmsPolicyAssignmentV1 } from '@cdktf/provider-opentelekomcloud'

const rmsPolicyAssignmentV1CustomPolicy: rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.property.authType">authType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#auth_type RmsPolicyAssignmentV1#auth_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.property.functionUrn">functionUrn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#function_urn RmsPolicyAssignmentV1#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.property.authValue">authValue</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#auth_value RmsPolicyAssignmentV1#auth_value}. |

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#auth_type RmsPolicyAssignmentV1#auth_type}.

---

##### `functionUrn`<sup>Required</sup> <a name="functionUrn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.property.functionUrn"></a>

```typescript
public readonly functionUrn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#function_urn RmsPolicyAssignmentV1#function_urn}.

---

##### `authValue`<sup>Optional</sup> <a name="authValue" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.property.authValue"></a>

```typescript
public readonly authValue: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#auth_value RmsPolicyAssignmentV1#auth_value}.

---

### RmsPolicyAssignmentV1PolicyFilter <a name="RmsPolicyAssignmentV1PolicyFilter" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.Initializer"></a>

```typescript
import { rmsPolicyAssignmentV1 } from '@cdktf/provider-opentelekomcloud'

const rmsPolicyAssignmentV1PolicyFilter: rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#region RmsPolicyAssignmentV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#resource_id RmsPolicyAssignmentV1#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.resourceProvider">resourceProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#resource_provider RmsPolicyAssignmentV1#resource_provider}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#resource_type RmsPolicyAssignmentV1#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#tag_key RmsPolicyAssignmentV1#tag_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.tagValue">tagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#tag_value RmsPolicyAssignmentV1#tag_value}. |

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#region RmsPolicyAssignmentV1#region}.

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#resource_id RmsPolicyAssignmentV1#resource_id}.

---

##### `resourceProvider`<sup>Optional</sup> <a name="resourceProvider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.resourceProvider"></a>

```typescript
public readonly resourceProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#resource_provider RmsPolicyAssignmentV1#resource_provider}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#resource_type RmsPolicyAssignmentV1#resource_type}.

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#tag_key RmsPolicyAssignmentV1#tag_key}.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#tag_value RmsPolicyAssignmentV1#tag_value}.

---

### RmsPolicyAssignmentV1Timeouts <a name="RmsPolicyAssignmentV1Timeouts" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts.Initializer"></a>

```typescript
import { rmsPolicyAssignmentV1 } from '@cdktf/provider-opentelekomcloud'

const rmsPolicyAssignmentV1Timeouts: rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#create RmsPolicyAssignmentV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#update RmsPolicyAssignmentV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#create RmsPolicyAssignmentV1#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/rms_policy_assignment_v1#update RmsPolicyAssignmentV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RmsPolicyAssignmentV1CustomPolicyOutputReference <a name="RmsPolicyAssignmentV1CustomPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.Initializer"></a>

```typescript
import { rmsPolicyAssignmentV1 } from '@cdktf/provider-opentelekomcloud'

new rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.resetAuthValue">resetAuthValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthValue` <a name="resetAuthValue" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.resetAuthValue"></a>

```typescript
public resetAuthValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authValueInput">authValueInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.functionUrnInput">functionUrnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authValue">authValue</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.functionUrn">functionUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `authValueInput`<sup>Optional</sup> <a name="authValueInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authValueInput"></a>

```typescript
public readonly authValueInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `functionUrnInput`<sup>Optional</sup> <a name="functionUrnInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.functionUrnInput"></a>

```typescript
public readonly functionUrnInput: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `authValue`<sup>Required</sup> <a name="authValue" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authValue"></a>

```typescript
public readonly authValue: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `functionUrn`<sup>Required</sup> <a name="functionUrn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.functionUrn"></a>

```typescript
public readonly functionUrn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RmsPolicyAssignmentV1CustomPolicy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a>

---


### RmsPolicyAssignmentV1PolicyFilterOutputReference <a name="RmsPolicyAssignmentV1PolicyFilterOutputReference" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.Initializer"></a>

```typescript
import { rmsPolicyAssignmentV1 } from '@cdktf/provider-opentelekomcloud'

new rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetResourceProvider">resetResourceProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

##### `resetResourceProvider` <a name="resetResourceProvider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetResourceProvider"></a>

```typescript
public resetResourceProvider(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceProviderInput">resourceProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceProvider">resourceProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `resourceProviderInput`<sup>Optional</sup> <a name="resourceProviderInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceProviderInput"></a>

```typescript
public readonly resourceProviderInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceProvider`<sup>Required</sup> <a name="resourceProvider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceProvider"></a>

```typescript
public readonly resourceProvider: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RmsPolicyAssignmentV1PolicyFilter;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a>

---


### RmsPolicyAssignmentV1TimeoutsOutputReference <a name="RmsPolicyAssignmentV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { rmsPolicyAssignmentV1 } from '@cdktf/provider-opentelekomcloud'

new rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts">RmsPolicyAssignmentV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RmsPolicyAssignmentV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts">RmsPolicyAssignmentV1Timeouts</a>

---



