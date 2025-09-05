# `cfwAclRuleV1` Submodule <a name="`cfwAclRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfwAclRuleV1 <a name="CfwAclRuleV1" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1 opentelekomcloud_cfw_acl_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

new cfwAclRuleV1.CfwAclRuleV1(scope: Construct, id: string, config: CfwAclRuleV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config">CfwAclRuleV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config">CfwAclRuleV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSequence">putSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService">putService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetApplications">resetApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetApplicationsJsonString">resetApplicationsJsonString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTime">resetLongConnectTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeHour">resetLongConnectTimeHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeMinute">resetLongConnectTimeMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeSecond">resetLongConnectTimeSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination"></a>

```typescript
public putDestination(value: CfwAclRuleV1Destination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a>

---

##### `putSequence` <a name="putSequence" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSequence"></a>

```typescript
public putSequence(value: CfwAclRuleV1Sequence): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSequence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a>

---

##### `putService` <a name="putService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService"></a>

```typescript
public putService(value: CfwAclRuleV1Service): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource"></a>

```typescript
public putSource(value: CfwAclRuleV1Source): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putTimeouts"></a>

```typescript
public putTimeouts(value: CfwAclRuleV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a>

---

##### `resetApplications` <a name="resetApplications" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetApplications"></a>

```typescript
public resetApplications(): void
```

##### `resetApplicationsJsonString` <a name="resetApplicationsJsonString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetApplicationsJsonString"></a>

```typescript
public resetApplicationsJsonString(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetLongConnectTime` <a name="resetLongConnectTime" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTime"></a>

```typescript
public resetLongConnectTime(): void
```

##### `resetLongConnectTimeHour` <a name="resetLongConnectTimeHour" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeHour"></a>

```typescript
public resetLongConnectTimeHour(): void
```

##### `resetLongConnectTimeMinute` <a name="resetLongConnectTimeMinute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeMinute"></a>

```typescript
public resetLongConnectTimeMinute(): void
```

##### `resetLongConnectTimeSecond` <a name="resetLongConnectTimeSecond" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetLongConnectTimeSecond"></a>

```typescript
public resetLongConnectTimeSecond(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CfwAclRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isConstruct"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

cfwAclRuleV1.CfwAclRuleV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformElement"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

cfwAclRuleV1.CfwAclRuleV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformResource"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

cfwAclRuleV1.CfwAclRuleV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CfwAclRuleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CfwAclRuleV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CfwAclRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CfwAclRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference">CfwAclRuleV1DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.lastOpenTime">lastOpenTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sequence">sequence</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference">CfwAclRuleV1SequenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.service">service</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference">CfwAclRuleV1ServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.source">source</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference">CfwAclRuleV1SourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference">CfwAclRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.actionTypeInput">actionTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.addressTypeInput">addressTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsInput">applicationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsJsonStringInput">applicationsJsonStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.destinationInput">destinationInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.directionInput">directionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectEnableInput">longConnectEnableInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeHourInput">longConnectTimeHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeInput">longConnectTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeMinuteInput">longConnectTimeMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeSecondInput">longConnectTimeSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sequenceInput">sequenceInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.serviceInput">serviceInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.statusInput">statusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.typeInput">typeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.actionType">actionType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.addressType">addressType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applications">applications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsJsonString">applicationsJsonString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.direction">direction</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectEnable">longConnectEnable</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTime">longConnectTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeHour">longConnectTimeHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeMinute">longConnectTimeMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeSecond">longConnectTimeSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.status">status</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.type">type</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.destination"></a>

```typescript
public readonly destination: CfwAclRuleV1DestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference">CfwAclRuleV1DestinationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastOpenTime`<sup>Required</sup> <a name="lastOpenTime" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.lastOpenTime"></a>

```typescript
public readonly lastOpenTime: string;
```

- *Type:* string

---

##### `sequence`<sup>Required</sup> <a name="sequence" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sequence"></a>

```typescript
public readonly sequence: CfwAclRuleV1SequenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference">CfwAclRuleV1SequenceOutputReference</a>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.service"></a>

```typescript
public readonly service: CfwAclRuleV1ServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference">CfwAclRuleV1ServiceOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.source"></a>

```typescript
public readonly source: CfwAclRuleV1SourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference">CfwAclRuleV1SourceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.timeouts"></a>

```typescript
public readonly timeouts: CfwAclRuleV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference">CfwAclRuleV1TimeoutsOutputReference</a>

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: number;
```

- *Type:* number

---

##### `addressTypeInput`<sup>Optional</sup> <a name="addressTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.addressTypeInput"></a>

```typescript
public readonly addressTypeInput: number;
```

- *Type:* number

---

##### `applicationsInput`<sup>Optional</sup> <a name="applicationsInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsInput"></a>

```typescript
public readonly applicationsInput: string[];
```

- *Type:* string[]

---

##### `applicationsJsonStringInput`<sup>Optional</sup> <a name="applicationsJsonStringInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsJsonStringInput"></a>

```typescript
public readonly applicationsJsonStringInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.destinationInput"></a>

```typescript
public readonly destinationInput: CfwAclRuleV1Destination;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.directionInput"></a>

```typescript
public readonly directionInput: number;
```

- *Type:* number

---

##### `longConnectEnableInput`<sup>Optional</sup> <a name="longConnectEnableInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectEnableInput"></a>

```typescript
public readonly longConnectEnableInput: number;
```

- *Type:* number

---

##### `longConnectTimeHourInput`<sup>Optional</sup> <a name="longConnectTimeHourInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeHourInput"></a>

```typescript
public readonly longConnectTimeHourInput: number;
```

- *Type:* number

---

##### `longConnectTimeInput`<sup>Optional</sup> <a name="longConnectTimeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeInput"></a>

```typescript
public readonly longConnectTimeInput: number;
```

- *Type:* number

---

##### `longConnectTimeMinuteInput`<sup>Optional</sup> <a name="longConnectTimeMinuteInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeMinuteInput"></a>

```typescript
public readonly longConnectTimeMinuteInput: number;
```

- *Type:* number

---

##### `longConnectTimeSecondInput`<sup>Optional</sup> <a name="longConnectTimeSecondInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeSecondInput"></a>

```typescript
public readonly longConnectTimeSecondInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `sequenceInput`<sup>Optional</sup> <a name="sequenceInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sequenceInput"></a>

```typescript
public readonly sequenceInput: CfwAclRuleV1Sequence;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a>

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.serviceInput"></a>

```typescript
public readonly serviceInput: CfwAclRuleV1Service;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.sourceInput"></a>

```typescript
public readonly sourceInput: CfwAclRuleV1Source;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.statusInput"></a>

```typescript
public readonly statusInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CfwAclRuleV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.typeInput"></a>

```typescript
public readonly typeInput: number;
```

- *Type:* number

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.actionType"></a>

```typescript
public readonly actionType: number;
```

- *Type:* number

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.addressType"></a>

```typescript
public readonly addressType: number;
```

- *Type:* number

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applications"></a>

```typescript
public readonly applications: string[];
```

- *Type:* string[]

---

##### `applicationsJsonString`<sup>Required</sup> <a name="applicationsJsonString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.applicationsJsonString"></a>

```typescript
public readonly applicationsJsonString: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.direction"></a>

```typescript
public readonly direction: number;
```

- *Type:* number

---

##### `longConnectEnable`<sup>Required</sup> <a name="longConnectEnable" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectEnable"></a>

```typescript
public readonly longConnectEnable: number;
```

- *Type:* number

---

##### `longConnectTime`<sup>Required</sup> <a name="longConnectTime" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTime"></a>

```typescript
public readonly longConnectTime: number;
```

- *Type:* number

---

##### `longConnectTimeHour`<sup>Required</sup> <a name="longConnectTimeHour" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeHour"></a>

```typescript
public readonly longConnectTimeHour: number;
```

- *Type:* number

---

##### `longConnectTimeMinute`<sup>Required</sup> <a name="longConnectTimeMinute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeMinute"></a>

```typescript
public readonly longConnectTimeMinute: number;
```

- *Type:* number

---

##### `longConnectTimeSecond`<sup>Required</sup> <a name="longConnectTimeSecond" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.longConnectTimeSecond"></a>

```typescript
public readonly longConnectTimeSecond: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.status"></a>

```typescript
public readonly status: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CfwAclRuleV1Config <a name="CfwAclRuleV1Config" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

const cfwAclRuleV1Config: cfwAclRuleV1.CfwAclRuleV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.actionType">actionType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#action_type CfwAclRuleV1#action_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.addressType">addressType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectEnable">longConnectEnable</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#long_connect_enable CfwAclRuleV1#long_connect_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#object_id CfwAclRuleV1#object_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.sequence">sequence</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a></code> | sequence block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.service">service</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a></code> | service block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.source">source</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a></code> | source block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.status">status</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#status CfwAclRuleV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.type">type</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.applications">applications</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#applications CfwAclRuleV1#applications}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.applicationsJsonString">applicationsJsonString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#applications_json_string CfwAclRuleV1#applications_json_string}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.direction">direction</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#direction CfwAclRuleV1#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTime">longConnectTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#long_connect_time CfwAclRuleV1#long_connect_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeHour">longConnectTimeHour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#long_connect_time_hour CfwAclRuleV1#long_connect_time_hour}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeMinute">longConnectTimeMinute</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#long_connect_time_minute CfwAclRuleV1#long_connect_time_minute}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeSecond">longConnectTimeSecond</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#long_connect_time_second CfwAclRuleV1#long_connect_time_second}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.actionType"></a>

```typescript
public readonly actionType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#action_type CfwAclRuleV1#action_type}.

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.addressType"></a>

```typescript
public readonly addressType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}.

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.destination"></a>

```typescript
public readonly destination: CfwAclRuleV1Destination;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#destination CfwAclRuleV1#destination}

---

##### `longConnectEnable`<sup>Required</sup> <a name="longConnectEnable" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectEnable"></a>

```typescript
public readonly longConnectEnable: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#long_connect_enable CfwAclRuleV1#long_connect_enable}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#object_id CfwAclRuleV1#object_id}.

---

##### `sequence`<sup>Required</sup> <a name="sequence" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.sequence"></a>

```typescript
public readonly sequence: CfwAclRuleV1Sequence;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a>

sequence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#sequence CfwAclRuleV1#sequence}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.service"></a>

```typescript
public readonly service: CfwAclRuleV1Service;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#service CfwAclRuleV1#service}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.source"></a>

```typescript
public readonly source: CfwAclRuleV1Source;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#source CfwAclRuleV1#source}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.status"></a>

```typescript
public readonly status: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#status CfwAclRuleV1#status}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.applications"></a>

```typescript
public readonly applications: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#applications CfwAclRuleV1#applications}.

---

##### `applicationsJsonString`<sup>Optional</sup> <a name="applicationsJsonString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.applicationsJsonString"></a>

```typescript
public readonly applicationsJsonString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#applications_json_string CfwAclRuleV1#applications_json_string}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.direction"></a>

```typescript
public readonly direction: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#direction CfwAclRuleV1#direction}.

---

##### `longConnectTime`<sup>Optional</sup> <a name="longConnectTime" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTime"></a>

```typescript
public readonly longConnectTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#long_connect_time CfwAclRuleV1#long_connect_time}.

---

##### `longConnectTimeHour`<sup>Optional</sup> <a name="longConnectTimeHour" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeHour"></a>

```typescript
public readonly longConnectTimeHour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#long_connect_time_hour CfwAclRuleV1#long_connect_time_hour}.

---

##### `longConnectTimeMinute`<sup>Optional</sup> <a name="longConnectTimeMinute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeMinute"></a>

```typescript
public readonly longConnectTimeMinute: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#long_connect_time_minute CfwAclRuleV1#long_connect_time_minute}.

---

##### `longConnectTimeSecond`<sup>Optional</sup> <a name="longConnectTimeSecond" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.longConnectTimeSecond"></a>

```typescript
public readonly longConnectTimeSecond: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#long_connect_time_second CfwAclRuleV1#long_connect_time_second}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: CfwAclRuleV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#timeouts CfwAclRuleV1#timeouts}

---

### CfwAclRuleV1Destination <a name="CfwAclRuleV1Destination" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

const cfwAclRuleV1Destination: cfwAclRuleV1.CfwAclRuleV1Destination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.type">type</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressGroup">addressGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetId">addressSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetName">addressSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetType">addressSetType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressType">addressType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainAddressName">domainAddressName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainSetId">domainSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainSetName">domainSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.ipAddress">ipAddress</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.predefinedGroup">predefinedGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.regionList">regionList</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>[]</code> | region_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.regionListJson">regionListJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}.

---

##### `addressGroup`<sup>Optional</sup> <a name="addressGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressGroup"></a>

```typescript
public readonly addressGroup: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}.

---

##### `addressSetId`<sup>Optional</sup> <a name="addressSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetId"></a>

```typescript
public readonly addressSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}.

---

##### `addressSetName`<sup>Optional</sup> <a name="addressSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetName"></a>

```typescript
public readonly addressSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}.

---

##### `addressSetType`<sup>Optional</sup> <a name="addressSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressSetType"></a>

```typescript
public readonly addressSetType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}.

---

##### `addressType`<sup>Optional</sup> <a name="addressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.addressType"></a>

```typescript
public readonly addressType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}.

---

##### `domainAddressName`<sup>Optional</sup> <a name="domainAddressName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainAddressName"></a>

```typescript
public readonly domainAddressName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}.

---

##### `domainSetId`<sup>Optional</sup> <a name="domainSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainSetId"></a>

```typescript
public readonly domainSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}.

---

##### `domainSetName`<sup>Optional</sup> <a name="domainSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.domainSetName"></a>

```typescript
public readonly domainSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.ipAddress"></a>

```typescript
public readonly ipAddress: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}.

---

##### `predefinedGroup`<sup>Optional</sup> <a name="predefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.predefinedGroup"></a>

```typescript
public readonly predefinedGroup: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}.

---

##### `regionList`<sup>Optional</sup> <a name="regionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.regionList"></a>

```typescript
public readonly regionList: IResolvable | CfwAclRuleV1DestinationRegionListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>[]

region_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#region_list CfwAclRuleV1#region_list}

---

##### `regionListJson`<sup>Optional</sup> <a name="regionListJson" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination.property.regionListJson"></a>

```typescript
public readonly regionListJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}.

---

### CfwAclRuleV1DestinationRegionListStruct <a name="CfwAclRuleV1DestinationRegionListStruct" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

const cfwAclRuleV1DestinationRegionListStruct: cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.property.regionId">regionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#region_id CfwAclRuleV1#region_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.property.regionType">regionType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#region_type CfwAclRuleV1#region_type}. |

---

##### `regionId`<sup>Optional</sup> <a name="regionId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.property.regionId"></a>

```typescript
public readonly regionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#region_id CfwAclRuleV1#region_id}.

---

##### `regionType`<sup>Optional</sup> <a name="regionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct.property.regionType"></a>

```typescript
public readonly regionType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#region_type CfwAclRuleV1#region_type}.

---

### CfwAclRuleV1Sequence <a name="CfwAclRuleV1Sequence" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

const cfwAclRuleV1Sequence: cfwAclRuleV1.CfwAclRuleV1Sequence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.bottom">bottom</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#bottom CfwAclRuleV1#bottom}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.destRuleId">destRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#dest_rule_id CfwAclRuleV1#dest_rule_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.top">top</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#top CfwAclRuleV1#top}. |

---

##### `bottom`<sup>Optional</sup> <a name="bottom" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.bottom"></a>

```typescript
public readonly bottom: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#bottom CfwAclRuleV1#bottom}.

---

##### `destRuleId`<sup>Optional</sup> <a name="destRuleId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.destRuleId"></a>

```typescript
public readonly destRuleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#dest_rule_id CfwAclRuleV1#dest_rule_id}.

---

##### `top`<sup>Optional</sup> <a name="top" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence.property.top"></a>

```typescript
public readonly top: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#top CfwAclRuleV1#top}.

---

### CfwAclRuleV1Service <a name="CfwAclRuleV1Service" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

const cfwAclRuleV1Service: cfwAclRuleV1.CfwAclRuleV1Service = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.type">type</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.customService">customService</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>[]</code> | custom_service block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.destPort">destPort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.predefinedGroup">predefinedGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.protocol">protocol</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.protocols">protocols</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceGroup">serviceGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#service_group CfwAclRuleV1#service_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceGroupNames">serviceGroupNames</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>[]</code> | service_group_names block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetId">serviceSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#service_set_id CfwAclRuleV1#service_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetName">serviceSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#service_set_name CfwAclRuleV1#service_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetType">serviceSetType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.sourcePort">sourcePort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

##### `customService`<sup>Optional</sup> <a name="customService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.customService"></a>

```typescript
public readonly customService: IResolvable | CfwAclRuleV1ServiceCustomService[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>[]

custom_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#custom_service CfwAclRuleV1#custom_service}

---

##### `destPort`<sup>Optional</sup> <a name="destPort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.destPort"></a>

```typescript
public readonly destPort: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}.

---

##### `predefinedGroup`<sup>Optional</sup> <a name="predefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.predefinedGroup"></a>

```typescript
public readonly predefinedGroup: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.protocols"></a>

```typescript
public readonly protocols: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}.

---

##### `serviceGroup`<sup>Optional</sup> <a name="serviceGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceGroup"></a>

```typescript
public readonly serviceGroup: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#service_group CfwAclRuleV1#service_group}.

---

##### `serviceGroupNames`<sup>Optional</sup> <a name="serviceGroupNames" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceGroupNames"></a>

```typescript
public readonly serviceGroupNames: IResolvable | CfwAclRuleV1ServiceServiceGroupNames[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>[]

service_group_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#service_group_names CfwAclRuleV1#service_group_names}

---

##### `serviceSetId`<sup>Optional</sup> <a name="serviceSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetId"></a>

```typescript
public readonly serviceSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#service_set_id CfwAclRuleV1#service_set_id}.

---

##### `serviceSetName`<sup>Optional</sup> <a name="serviceSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetName"></a>

```typescript
public readonly serviceSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#service_set_name CfwAclRuleV1#service_set_name}.

---

##### `serviceSetType`<sup>Optional</sup> <a name="serviceSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.serviceSetType"></a>

```typescript
public readonly serviceSetType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}.

---

##### `sourcePort`<sup>Optional</sup> <a name="sourcePort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service.property.sourcePort"></a>

```typescript
public readonly sourcePort: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}.

---

### CfwAclRuleV1ServiceCustomService <a name="CfwAclRuleV1ServiceCustomService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

const cfwAclRuleV1ServiceCustomService: cfwAclRuleV1.CfwAclRuleV1ServiceCustomService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.destPort">destPort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.protocol">protocol</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.sourcePort">sourcePort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#description CfwAclRuleV1#description}.

---

##### `destPort`<sup>Optional</sup> <a name="destPort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.destPort"></a>

```typescript
public readonly destPort: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#dest_port CfwAclRuleV1#dest_port}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#protocol CfwAclRuleV1#protocol}.

---

##### `sourcePort`<sup>Optional</sup> <a name="sourcePort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService.property.sourcePort"></a>

```typescript
public readonly sourcePort: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#source_port CfwAclRuleV1#source_port}.

---

### CfwAclRuleV1ServiceServiceGroupNames <a name="CfwAclRuleV1ServiceServiceGroupNames" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

const cfwAclRuleV1ServiceServiceGroupNames: cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.protocols">protocols</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.serviceSetType">serviceSetType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.setId">setId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#set_id CfwAclRuleV1#set_id}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#name CfwAclRuleV1#name}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.protocols"></a>

```typescript
public readonly protocols: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#protocols CfwAclRuleV1#protocols}.

---

##### `serviceSetType`<sup>Optional</sup> <a name="serviceSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.serviceSetType"></a>

```typescript
public readonly serviceSetType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#service_set_type CfwAclRuleV1#service_set_type}.

---

##### `setId`<sup>Optional</sup> <a name="setId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames.property.setId"></a>

```typescript
public readonly setId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#set_id CfwAclRuleV1#set_id}.

---

### CfwAclRuleV1Source <a name="CfwAclRuleV1Source" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

const cfwAclRuleV1Source: cfwAclRuleV1.CfwAclRuleV1Source = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.type">type</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressGroup">addressGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetId">addressSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetName">addressSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetType">addressSetType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressType">addressType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainAddressName">domainAddressName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainSetId">domainSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainSetName">domainSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.ipAddress">ipAddress</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.predefinedGroup">predefinedGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.regionList">regionList</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>[]</code> | region_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.regionListJson">regionListJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#type CfwAclRuleV1#type}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address CfwAclRuleV1#address}.

---

##### `addressGroup`<sup>Optional</sup> <a name="addressGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressGroup"></a>

```typescript
public readonly addressGroup: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_group CfwAclRuleV1#address_group}.

---

##### `addressSetId`<sup>Optional</sup> <a name="addressSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetId"></a>

```typescript
public readonly addressSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_set_id CfwAclRuleV1#address_set_id}.

---

##### `addressSetName`<sup>Optional</sup> <a name="addressSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetName"></a>

```typescript
public readonly addressSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_set_name CfwAclRuleV1#address_set_name}.

---

##### `addressSetType`<sup>Optional</sup> <a name="addressSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressSetType"></a>

```typescript
public readonly addressSetType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_set_type CfwAclRuleV1#address_set_type}.

---

##### `addressType`<sup>Optional</sup> <a name="addressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.addressType"></a>

```typescript
public readonly addressType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#address_type CfwAclRuleV1#address_type}.

---

##### `domainAddressName`<sup>Optional</sup> <a name="domainAddressName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainAddressName"></a>

```typescript
public readonly domainAddressName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#domain_address_name CfwAclRuleV1#domain_address_name}.

---

##### `domainSetId`<sup>Optional</sup> <a name="domainSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainSetId"></a>

```typescript
public readonly domainSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#domain_set_id CfwAclRuleV1#domain_set_id}.

---

##### `domainSetName`<sup>Optional</sup> <a name="domainSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.domainSetName"></a>

```typescript
public readonly domainSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#domain_set_name CfwAclRuleV1#domain_set_name}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.ipAddress"></a>

```typescript
public readonly ipAddress: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#ip_address CfwAclRuleV1#ip_address}.

---

##### `predefinedGroup`<sup>Optional</sup> <a name="predefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.predefinedGroup"></a>

```typescript
public readonly predefinedGroup: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#predefined_group CfwAclRuleV1#predefined_group}.

---

##### `regionList`<sup>Optional</sup> <a name="regionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.regionList"></a>

```typescript
public readonly regionList: IResolvable | CfwAclRuleV1SourceRegionListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>[]

region_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#region_list CfwAclRuleV1#region_list}

---

##### `regionListJson`<sup>Optional</sup> <a name="regionListJson" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source.property.regionListJson"></a>

```typescript
public readonly regionListJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#region_list_json CfwAclRuleV1#region_list_json}.

---

### CfwAclRuleV1SourceRegionListStruct <a name="CfwAclRuleV1SourceRegionListStruct" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

const cfwAclRuleV1SourceRegionListStruct: cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.property.regionId">regionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#region_id CfwAclRuleV1#region_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.property.regionType">regionType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#region_type CfwAclRuleV1#region_type}. |

---

##### `regionId`<sup>Optional</sup> <a name="regionId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.property.regionId"></a>

```typescript
public readonly regionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#region_id CfwAclRuleV1#region_id}.

---

##### `regionType`<sup>Optional</sup> <a name="regionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct.property.regionType"></a>

```typescript
public readonly regionType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#region_type CfwAclRuleV1#region_type}.

---

### CfwAclRuleV1Timeouts <a name="CfwAclRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

const cfwAclRuleV1Timeouts: cfwAclRuleV1.CfwAclRuleV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#create CfwAclRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#delete CfwAclRuleV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#update CfwAclRuleV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#create CfwAclRuleV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#delete CfwAclRuleV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.47/docs/resources/cfw_acl_rule_v1#update CfwAclRuleV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CfwAclRuleV1DestinationOutputReference <a name="CfwAclRuleV1DestinationOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

new cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.putRegionList">putRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressGroup">resetAddressGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetId">resetAddressSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetName">resetAddressSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetType">resetAddressSetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressType">resetAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainAddressName">resetDomainAddressName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainSetId">resetDomainSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainSetName">resetDomainSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetPredefinedGroup">resetPredefinedGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetRegionList">resetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetRegionListJson">resetRegionListJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRegionList` <a name="putRegionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.putRegionList"></a>

```typescript
public putRegionList(value: IResolvable | CfwAclRuleV1DestinationRegionListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.putRegionList.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>[]

---

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetAddressGroup` <a name="resetAddressGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressGroup"></a>

```typescript
public resetAddressGroup(): void
```

##### `resetAddressSetId` <a name="resetAddressSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetId"></a>

```typescript
public resetAddressSetId(): void
```

##### `resetAddressSetName` <a name="resetAddressSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetName"></a>

```typescript
public resetAddressSetName(): void
```

##### `resetAddressSetType` <a name="resetAddressSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressSetType"></a>

```typescript
public resetAddressSetType(): void
```

##### `resetAddressType` <a name="resetAddressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetAddressType"></a>

```typescript
public resetAddressType(): void
```

##### `resetDomainAddressName` <a name="resetDomainAddressName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainAddressName"></a>

```typescript
public resetDomainAddressName(): void
```

##### `resetDomainSetId` <a name="resetDomainSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainSetId"></a>

```typescript
public resetDomainSetId(): void
```

##### `resetDomainSetName` <a name="resetDomainSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetDomainSetName"></a>

```typescript
public resetDomainSetName(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetPredefinedGroup` <a name="resetPredefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetPredefinedGroup"></a>

```typescript
public resetPredefinedGroup(): void
```

##### `resetRegionList` <a name="resetRegionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetRegionList"></a>

```typescript
public resetRegionList(): void
```

##### `resetRegionListJson` <a name="resetRegionListJson" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.resetRegionListJson"></a>

```typescript
public resetRegionListJson(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionList">regionList</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList">CfwAclRuleV1DestinationRegionListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressGroupInput">addressGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetIdInput">addressSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetNameInput">addressSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetTypeInput">addressSetTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressTypeInput">addressTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainAddressNameInput">domainAddressNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetIdInput">domainSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetNameInput">domainSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.predefinedGroupInput">predefinedGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListInput">regionListInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListJsonInput">regionListJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.typeInput">typeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressGroup">addressGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetId">addressSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetName">addressSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetType">addressSetType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressType">addressType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainAddressName">domainAddressName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetId">domainSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetName">domainSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.ipAddress">ipAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.predefinedGroup">predefinedGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListJson">regionListJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.type">type</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionList`<sup>Required</sup> <a name="regionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionList"></a>

```typescript
public readonly regionList: CfwAclRuleV1DestinationRegionListStructList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList">CfwAclRuleV1DestinationRegionListStructList</a>

---

##### `addressGroupInput`<sup>Optional</sup> <a name="addressGroupInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressGroupInput"></a>

```typescript
public readonly addressGroupInput: string[];
```

- *Type:* string[]

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `addressSetIdInput`<sup>Optional</sup> <a name="addressSetIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetIdInput"></a>

```typescript
public readonly addressSetIdInput: string;
```

- *Type:* string

---

##### `addressSetNameInput`<sup>Optional</sup> <a name="addressSetNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetNameInput"></a>

```typescript
public readonly addressSetNameInput: string;
```

- *Type:* string

---

##### `addressSetTypeInput`<sup>Optional</sup> <a name="addressSetTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetTypeInput"></a>

```typescript
public readonly addressSetTypeInput: number;
```

- *Type:* number

---

##### `addressTypeInput`<sup>Optional</sup> <a name="addressTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressTypeInput"></a>

```typescript
public readonly addressTypeInput: number;
```

- *Type:* number

---

##### `domainAddressNameInput`<sup>Optional</sup> <a name="domainAddressNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainAddressNameInput"></a>

```typescript
public readonly domainAddressNameInput: string;
```

- *Type:* string

---

##### `domainSetIdInput`<sup>Optional</sup> <a name="domainSetIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetIdInput"></a>

```typescript
public readonly domainSetIdInput: string;
```

- *Type:* string

---

##### `domainSetNameInput`<sup>Optional</sup> <a name="domainSetNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetNameInput"></a>

```typescript
public readonly domainSetNameInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string[];
```

- *Type:* string[]

---

##### `predefinedGroupInput`<sup>Optional</sup> <a name="predefinedGroupInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.predefinedGroupInput"></a>

```typescript
public readonly predefinedGroupInput: string[];
```

- *Type:* string[]

---

##### `regionListInput`<sup>Optional</sup> <a name="regionListInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListInput"></a>

```typescript
public readonly regionListInput: IResolvable | CfwAclRuleV1DestinationRegionListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>[]

---

##### `regionListJsonInput`<sup>Optional</sup> <a name="regionListJsonInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListJsonInput"></a>

```typescript
public readonly regionListJsonInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: number;
```

- *Type:* number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `addressGroup`<sup>Required</sup> <a name="addressGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressGroup"></a>

```typescript
public readonly addressGroup: string[];
```

- *Type:* string[]

---

##### `addressSetId`<sup>Required</sup> <a name="addressSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetId"></a>

```typescript
public readonly addressSetId: string;
```

- *Type:* string

---

##### `addressSetName`<sup>Required</sup> <a name="addressSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetName"></a>

```typescript
public readonly addressSetName: string;
```

- *Type:* string

---

##### `addressSetType`<sup>Required</sup> <a name="addressSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressSetType"></a>

```typescript
public readonly addressSetType: number;
```

- *Type:* number

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.addressType"></a>

```typescript
public readonly addressType: number;
```

- *Type:* number

---

##### `domainAddressName`<sup>Required</sup> <a name="domainAddressName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainAddressName"></a>

```typescript
public readonly domainAddressName: string;
```

- *Type:* string

---

##### `domainSetId`<sup>Required</sup> <a name="domainSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetId"></a>

```typescript
public readonly domainSetId: string;
```

- *Type:* string

---

##### `domainSetName`<sup>Required</sup> <a name="domainSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.domainSetName"></a>

```typescript
public readonly domainSetName: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string[];
```

- *Type:* string[]

---

##### `predefinedGroup`<sup>Required</sup> <a name="predefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.predefinedGroup"></a>

```typescript
public readonly predefinedGroup: string[];
```

- *Type:* string[]

---

##### `regionListJson`<sup>Required</sup> <a name="regionListJson" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.regionListJson"></a>

```typescript
public readonly regionListJson: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CfwAclRuleV1Destination;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Destination">CfwAclRuleV1Destination</a>

---


### CfwAclRuleV1DestinationRegionListStructList <a name="CfwAclRuleV1DestinationRegionListStructList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

new cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.get"></a>

```typescript
public get(index: number): CfwAclRuleV1DestinationRegionListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CfwAclRuleV1DestinationRegionListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>[]

---


### CfwAclRuleV1DestinationRegionListStructOutputReference <a name="CfwAclRuleV1DestinationRegionListStructOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

new cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resetRegionId">resetRegionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resetRegionType">resetRegionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegionId` <a name="resetRegionId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resetRegionId"></a>

```typescript
public resetRegionId(): void
```

##### `resetRegionType` <a name="resetRegionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.resetRegionType"></a>

```typescript
public resetRegionType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionIdInput">regionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionTypeInput">regionTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionId">regionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionType">regionType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionIdInput`<sup>Optional</sup> <a name="regionIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionIdInput"></a>

```typescript
public readonly regionIdInput: string;
```

- *Type:* string

---

##### `regionTypeInput`<sup>Optional</sup> <a name="regionTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionTypeInput"></a>

```typescript
public readonly regionTypeInput: number;
```

- *Type:* number

---

##### `regionId`<sup>Required</sup> <a name="regionId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionId"></a>

```typescript
public readonly regionId: string;
```

- *Type:* string

---

##### `regionType`<sup>Required</sup> <a name="regionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.regionType"></a>

```typescript
public readonly regionType: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CfwAclRuleV1DestinationRegionListStruct;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1DestinationRegionListStruct">CfwAclRuleV1DestinationRegionListStruct</a>

---


### CfwAclRuleV1SequenceOutputReference <a name="CfwAclRuleV1SequenceOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

new cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetBottom">resetBottom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetDestRuleId">resetDestRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetTop">resetTop</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBottom` <a name="resetBottom" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetBottom"></a>

```typescript
public resetBottom(): void
```

##### `resetDestRuleId` <a name="resetDestRuleId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetDestRuleId"></a>

```typescript
public resetDestRuleId(): void
```

##### `resetTop` <a name="resetTop" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.resetTop"></a>

```typescript
public resetTop(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.bottomInput">bottomInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.destRuleIdInput">destRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.topInput">topInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.bottom">bottom</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.destRuleId">destRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.top">top</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bottomInput`<sup>Optional</sup> <a name="bottomInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.bottomInput"></a>

```typescript
public readonly bottomInput: number;
```

- *Type:* number

---

##### `destRuleIdInput`<sup>Optional</sup> <a name="destRuleIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.destRuleIdInput"></a>

```typescript
public readonly destRuleIdInput: string;
```

- *Type:* string

---

##### `topInput`<sup>Optional</sup> <a name="topInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.topInput"></a>

```typescript
public readonly topInput: number;
```

- *Type:* number

---

##### `bottom`<sup>Required</sup> <a name="bottom" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.bottom"></a>

```typescript
public readonly bottom: number;
```

- *Type:* number

---

##### `destRuleId`<sup>Required</sup> <a name="destRuleId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.destRuleId"></a>

```typescript
public readonly destRuleId: string;
```

- *Type:* string

---

##### `top`<sup>Required</sup> <a name="top" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.top"></a>

```typescript
public readonly top: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SequenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CfwAclRuleV1Sequence;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Sequence">CfwAclRuleV1Sequence</a>

---


### CfwAclRuleV1ServiceCustomServiceList <a name="CfwAclRuleV1ServiceCustomServiceList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

new cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.get"></a>

```typescript
public get(index: number): CfwAclRuleV1ServiceCustomServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CfwAclRuleV1ServiceCustomService[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>[]

---


### CfwAclRuleV1ServiceCustomServiceOutputReference <a name="CfwAclRuleV1ServiceCustomServiceOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

new cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetDestPort">resetDestPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetSourcePort">resetSourcePort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestPort` <a name="resetDestPort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetDestPort"></a>

```typescript
public resetDestPort(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSourcePort` <a name="resetSourcePort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.resetSourcePort"></a>

```typescript
public resetSourcePort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.destPortInput">destPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.protocolInput">protocolInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.sourcePortInput">sourcePortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.destPort">destPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.protocol">protocol</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.sourcePort">sourcePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destPortInput`<sup>Optional</sup> <a name="destPortInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.destPortInput"></a>

```typescript
public readonly destPortInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: number;
```

- *Type:* number

---

##### `sourcePortInput`<sup>Optional</sup> <a name="sourcePortInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.sourcePortInput"></a>

```typescript
public readonly sourcePortInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destPort`<sup>Required</sup> <a name="destPort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.destPort"></a>

```typescript
public readonly destPort: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

---

##### `sourcePort`<sup>Required</sup> <a name="sourcePort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.sourcePort"></a>

```typescript
public readonly sourcePort: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CfwAclRuleV1ServiceCustomService;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>

---


### CfwAclRuleV1ServiceOutputReference <a name="CfwAclRuleV1ServiceOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

new cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putCustomService">putCustomService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putServiceGroupNames">putServiceGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetCustomService">resetCustomService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetDestPort">resetDestPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetPredefinedGroup">resetPredefinedGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceGroup">resetServiceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceGroupNames">resetServiceGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetId">resetServiceSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetName">resetServiceSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetType">resetServiceSetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetSourcePort">resetSourcePort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomService` <a name="putCustomService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putCustomService"></a>

```typescript
public putCustomService(value: IResolvable | CfwAclRuleV1ServiceCustomService[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putCustomService.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>[]

---

##### `putServiceGroupNames` <a name="putServiceGroupNames" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putServiceGroupNames"></a>

```typescript
public putServiceGroupNames(value: IResolvable | CfwAclRuleV1ServiceServiceGroupNames[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.putServiceGroupNames.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>[]

---

##### `resetCustomService` <a name="resetCustomService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetCustomService"></a>

```typescript
public resetCustomService(): void
```

##### `resetDestPort` <a name="resetDestPort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetDestPort"></a>

```typescript
public resetDestPort(): void
```

##### `resetPredefinedGroup` <a name="resetPredefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetPredefinedGroup"></a>

```typescript
public resetPredefinedGroup(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetServiceGroup` <a name="resetServiceGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceGroup"></a>

```typescript
public resetServiceGroup(): void
```

##### `resetServiceGroupNames` <a name="resetServiceGroupNames" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceGroupNames"></a>

```typescript
public resetServiceGroupNames(): void
```

##### `resetServiceSetId` <a name="resetServiceSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetId"></a>

```typescript
public resetServiceSetId(): void
```

##### `resetServiceSetName` <a name="resetServiceSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetName"></a>

```typescript
public resetServiceSetName(): void
```

##### `resetServiceSetType` <a name="resetServiceSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetServiceSetType"></a>

```typescript
public resetServiceSetType(): void
```

##### `resetSourcePort` <a name="resetSourcePort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.resetSourcePort"></a>

```typescript
public resetSourcePort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.customService">customService</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList">CfwAclRuleV1ServiceCustomServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupNames">serviceGroupNames</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList">CfwAclRuleV1ServiceServiceGroupNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.customServiceInput">customServiceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.destPortInput">destPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.predefinedGroupInput">predefinedGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocolInput">protocolInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupInput">serviceGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupNamesInput">serviceGroupNamesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetIdInput">serviceSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetNameInput">serviceSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetTypeInput">serviceSetTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.sourcePortInput">sourcePortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.typeInput">typeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.destPort">destPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.predefinedGroup">predefinedGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocol">protocol</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocols">protocols</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroup">serviceGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetId">serviceSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetName">serviceSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetType">serviceSetType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.sourcePort">sourcePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.type">type</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customService`<sup>Required</sup> <a name="customService" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.customService"></a>

```typescript
public readonly customService: CfwAclRuleV1ServiceCustomServiceList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomServiceList">CfwAclRuleV1ServiceCustomServiceList</a>

---

##### `serviceGroupNames`<sup>Required</sup> <a name="serviceGroupNames" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupNames"></a>

```typescript
public readonly serviceGroupNames: CfwAclRuleV1ServiceServiceGroupNamesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList">CfwAclRuleV1ServiceServiceGroupNamesList</a>

---

##### `customServiceInput`<sup>Optional</sup> <a name="customServiceInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.customServiceInput"></a>

```typescript
public readonly customServiceInput: IResolvable | CfwAclRuleV1ServiceCustomService[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceCustomService">CfwAclRuleV1ServiceCustomService</a>[]

---

##### `destPortInput`<sup>Optional</sup> <a name="destPortInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.destPortInput"></a>

```typescript
public readonly destPortInput: string;
```

- *Type:* string

---

##### `predefinedGroupInput`<sup>Optional</sup> <a name="predefinedGroupInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.predefinedGroupInput"></a>

```typescript
public readonly predefinedGroupInput: string[];
```

- *Type:* string[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: number;
```

- *Type:* number

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: number[];
```

- *Type:* number[]

---

##### `serviceGroupInput`<sup>Optional</sup> <a name="serviceGroupInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupInput"></a>

```typescript
public readonly serviceGroupInput: string[];
```

- *Type:* string[]

---

##### `serviceGroupNamesInput`<sup>Optional</sup> <a name="serviceGroupNamesInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroupNamesInput"></a>

```typescript
public readonly serviceGroupNamesInput: IResolvable | CfwAclRuleV1ServiceServiceGroupNames[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>[]

---

##### `serviceSetIdInput`<sup>Optional</sup> <a name="serviceSetIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetIdInput"></a>

```typescript
public readonly serviceSetIdInput: string;
```

- *Type:* string

---

##### `serviceSetNameInput`<sup>Optional</sup> <a name="serviceSetNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetNameInput"></a>

```typescript
public readonly serviceSetNameInput: string;
```

- *Type:* string

---

##### `serviceSetTypeInput`<sup>Optional</sup> <a name="serviceSetTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetTypeInput"></a>

```typescript
public readonly serviceSetTypeInput: number;
```

- *Type:* number

---

##### `sourcePortInput`<sup>Optional</sup> <a name="sourcePortInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.sourcePortInput"></a>

```typescript
public readonly sourcePortInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: number;
```

- *Type:* number

---

##### `destPort`<sup>Required</sup> <a name="destPort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.destPort"></a>

```typescript
public readonly destPort: string;
```

- *Type:* string

---

##### `predefinedGroup`<sup>Required</sup> <a name="predefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.predefinedGroup"></a>

```typescript
public readonly predefinedGroup: string[];
```

- *Type:* string[]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.protocols"></a>

```typescript
public readonly protocols: number[];
```

- *Type:* number[]

---

##### `serviceGroup`<sup>Required</sup> <a name="serviceGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceGroup"></a>

```typescript
public readonly serviceGroup: string[];
```

- *Type:* string[]

---

##### `serviceSetId`<sup>Required</sup> <a name="serviceSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetId"></a>

```typescript
public readonly serviceSetId: string;
```

- *Type:* string

---

##### `serviceSetName`<sup>Required</sup> <a name="serviceSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetName"></a>

```typescript
public readonly serviceSetName: string;
```

- *Type:* string

---

##### `serviceSetType`<sup>Required</sup> <a name="serviceSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.serviceSetType"></a>

```typescript
public readonly serviceSetType: number;
```

- *Type:* number

---

##### `sourcePort`<sup>Required</sup> <a name="sourcePort" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.sourcePort"></a>

```typescript
public readonly sourcePort: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CfwAclRuleV1Service;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Service">CfwAclRuleV1Service</a>

---


### CfwAclRuleV1ServiceServiceGroupNamesList <a name="CfwAclRuleV1ServiceServiceGroupNamesList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

new cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.get"></a>

```typescript
public get(index: number): CfwAclRuleV1ServiceServiceGroupNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CfwAclRuleV1ServiceServiceGroupNames[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>[]

---


### CfwAclRuleV1ServiceServiceGroupNamesOutputReference <a name="CfwAclRuleV1ServiceServiceGroupNamesOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

new cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetServiceSetType">resetServiceSetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetSetId">resetSetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetServiceSetType` <a name="resetServiceSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetServiceSetType"></a>

```typescript
public resetServiceSetType(): void
```

##### `resetSetId` <a name="resetSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.resetSetId"></a>

```typescript
public resetSetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.serviceSetTypeInput">serviceSetTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.setIdInput">setIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.protocols">protocols</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.serviceSetType">serviceSetType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.setId">setId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: number[];
```

- *Type:* number[]

---

##### `serviceSetTypeInput`<sup>Optional</sup> <a name="serviceSetTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.serviceSetTypeInput"></a>

```typescript
public readonly serviceSetTypeInput: number;
```

- *Type:* number

---

##### `setIdInput`<sup>Optional</sup> <a name="setIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.setIdInput"></a>

```typescript
public readonly setIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.protocols"></a>

```typescript
public readonly protocols: number[];
```

- *Type:* number[]

---

##### `serviceSetType`<sup>Required</sup> <a name="serviceSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.serviceSetType"></a>

```typescript
public readonly serviceSetType: number;
```

- *Type:* number

---

##### `setId`<sup>Required</sup> <a name="setId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.setId"></a>

```typescript
public readonly setId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CfwAclRuleV1ServiceServiceGroupNames;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1ServiceServiceGroupNames">CfwAclRuleV1ServiceServiceGroupNames</a>

---


### CfwAclRuleV1SourceOutputReference <a name="CfwAclRuleV1SourceOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

new cfwAclRuleV1.CfwAclRuleV1SourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.putRegionList">putRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressGroup">resetAddressGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetId">resetAddressSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetName">resetAddressSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetType">resetAddressSetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressType">resetAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainAddressName">resetDomainAddressName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainSetId">resetDomainSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainSetName">resetDomainSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetPredefinedGroup">resetPredefinedGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetRegionList">resetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetRegionListJson">resetRegionListJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRegionList` <a name="putRegionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.putRegionList"></a>

```typescript
public putRegionList(value: IResolvable | CfwAclRuleV1SourceRegionListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.putRegionList.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>[]

---

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetAddressGroup` <a name="resetAddressGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressGroup"></a>

```typescript
public resetAddressGroup(): void
```

##### `resetAddressSetId` <a name="resetAddressSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetId"></a>

```typescript
public resetAddressSetId(): void
```

##### `resetAddressSetName` <a name="resetAddressSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetName"></a>

```typescript
public resetAddressSetName(): void
```

##### `resetAddressSetType` <a name="resetAddressSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressSetType"></a>

```typescript
public resetAddressSetType(): void
```

##### `resetAddressType` <a name="resetAddressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetAddressType"></a>

```typescript
public resetAddressType(): void
```

##### `resetDomainAddressName` <a name="resetDomainAddressName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainAddressName"></a>

```typescript
public resetDomainAddressName(): void
```

##### `resetDomainSetId` <a name="resetDomainSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainSetId"></a>

```typescript
public resetDomainSetId(): void
```

##### `resetDomainSetName` <a name="resetDomainSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetDomainSetName"></a>

```typescript
public resetDomainSetName(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetPredefinedGroup` <a name="resetPredefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetPredefinedGroup"></a>

```typescript
public resetPredefinedGroup(): void
```

##### `resetRegionList` <a name="resetRegionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetRegionList"></a>

```typescript
public resetRegionList(): void
```

##### `resetRegionListJson` <a name="resetRegionListJson" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.resetRegionListJson"></a>

```typescript
public resetRegionListJson(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionList">regionList</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList">CfwAclRuleV1SourceRegionListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressGroupInput">addressGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetIdInput">addressSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetNameInput">addressSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetTypeInput">addressSetTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressTypeInput">addressTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainAddressNameInput">domainAddressNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetIdInput">domainSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetNameInput">domainSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.predefinedGroupInput">predefinedGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListInput">regionListInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListJsonInput">regionListJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.typeInput">typeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressGroup">addressGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetId">addressSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetName">addressSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetType">addressSetType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressType">addressType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainAddressName">domainAddressName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetId">domainSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetName">domainSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.ipAddress">ipAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.predefinedGroup">predefinedGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListJson">regionListJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.type">type</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionList`<sup>Required</sup> <a name="regionList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionList"></a>

```typescript
public readonly regionList: CfwAclRuleV1SourceRegionListStructList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList">CfwAclRuleV1SourceRegionListStructList</a>

---

##### `addressGroupInput`<sup>Optional</sup> <a name="addressGroupInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressGroupInput"></a>

```typescript
public readonly addressGroupInput: string[];
```

- *Type:* string[]

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `addressSetIdInput`<sup>Optional</sup> <a name="addressSetIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetIdInput"></a>

```typescript
public readonly addressSetIdInput: string;
```

- *Type:* string

---

##### `addressSetNameInput`<sup>Optional</sup> <a name="addressSetNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetNameInput"></a>

```typescript
public readonly addressSetNameInput: string;
```

- *Type:* string

---

##### `addressSetTypeInput`<sup>Optional</sup> <a name="addressSetTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetTypeInput"></a>

```typescript
public readonly addressSetTypeInput: number;
```

- *Type:* number

---

##### `addressTypeInput`<sup>Optional</sup> <a name="addressTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressTypeInput"></a>

```typescript
public readonly addressTypeInput: number;
```

- *Type:* number

---

##### `domainAddressNameInput`<sup>Optional</sup> <a name="domainAddressNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainAddressNameInput"></a>

```typescript
public readonly domainAddressNameInput: string;
```

- *Type:* string

---

##### `domainSetIdInput`<sup>Optional</sup> <a name="domainSetIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetIdInput"></a>

```typescript
public readonly domainSetIdInput: string;
```

- *Type:* string

---

##### `domainSetNameInput`<sup>Optional</sup> <a name="domainSetNameInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetNameInput"></a>

```typescript
public readonly domainSetNameInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string[];
```

- *Type:* string[]

---

##### `predefinedGroupInput`<sup>Optional</sup> <a name="predefinedGroupInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.predefinedGroupInput"></a>

```typescript
public readonly predefinedGroupInput: string[];
```

- *Type:* string[]

---

##### `regionListInput`<sup>Optional</sup> <a name="regionListInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListInput"></a>

```typescript
public readonly regionListInput: IResolvable | CfwAclRuleV1SourceRegionListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>[]

---

##### `regionListJsonInput`<sup>Optional</sup> <a name="regionListJsonInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListJsonInput"></a>

```typescript
public readonly regionListJsonInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: number;
```

- *Type:* number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `addressGroup`<sup>Required</sup> <a name="addressGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressGroup"></a>

```typescript
public readonly addressGroup: string[];
```

- *Type:* string[]

---

##### `addressSetId`<sup>Required</sup> <a name="addressSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetId"></a>

```typescript
public readonly addressSetId: string;
```

- *Type:* string

---

##### `addressSetName`<sup>Required</sup> <a name="addressSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetName"></a>

```typescript
public readonly addressSetName: string;
```

- *Type:* string

---

##### `addressSetType`<sup>Required</sup> <a name="addressSetType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressSetType"></a>

```typescript
public readonly addressSetType: number;
```

- *Type:* number

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.addressType"></a>

```typescript
public readonly addressType: number;
```

- *Type:* number

---

##### `domainAddressName`<sup>Required</sup> <a name="domainAddressName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainAddressName"></a>

```typescript
public readonly domainAddressName: string;
```

- *Type:* string

---

##### `domainSetId`<sup>Required</sup> <a name="domainSetId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetId"></a>

```typescript
public readonly domainSetId: string;
```

- *Type:* string

---

##### `domainSetName`<sup>Required</sup> <a name="domainSetName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.domainSetName"></a>

```typescript
public readonly domainSetName: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string[];
```

- *Type:* string[]

---

##### `predefinedGroup`<sup>Required</sup> <a name="predefinedGroup" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.predefinedGroup"></a>

```typescript
public readonly predefinedGroup: string[];
```

- *Type:* string[]

---

##### `regionListJson`<sup>Required</sup> <a name="regionListJson" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.regionListJson"></a>

```typescript
public readonly regionListJson: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CfwAclRuleV1Source;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Source">CfwAclRuleV1Source</a>

---


### CfwAclRuleV1SourceRegionListStructList <a name="CfwAclRuleV1SourceRegionListStructList" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

new cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.get"></a>

```typescript
public get(index: number): CfwAclRuleV1SourceRegionListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CfwAclRuleV1SourceRegionListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>[]

---


### CfwAclRuleV1SourceRegionListStructOutputReference <a name="CfwAclRuleV1SourceRegionListStructOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

new cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resetRegionId">resetRegionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resetRegionType">resetRegionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegionId` <a name="resetRegionId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resetRegionId"></a>

```typescript
public resetRegionId(): void
```

##### `resetRegionType` <a name="resetRegionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.resetRegionType"></a>

```typescript
public resetRegionType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionIdInput">regionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionTypeInput">regionTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionId">regionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionType">regionType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionIdInput`<sup>Optional</sup> <a name="regionIdInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionIdInput"></a>

```typescript
public readonly regionIdInput: string;
```

- *Type:* string

---

##### `regionTypeInput`<sup>Optional</sup> <a name="regionTypeInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionTypeInput"></a>

```typescript
public readonly regionTypeInput: number;
```

- *Type:* number

---

##### `regionId`<sup>Required</sup> <a name="regionId" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionId"></a>

```typescript
public readonly regionId: string;
```

- *Type:* string

---

##### `regionType`<sup>Required</sup> <a name="regionType" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.regionType"></a>

```typescript
public readonly regionType: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CfwAclRuleV1SourceRegionListStruct;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1SourceRegionListStruct">CfwAclRuleV1SourceRegionListStruct</a>

---


### CfwAclRuleV1TimeoutsOutputReference <a name="CfwAclRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { cfwAclRuleV1 } from '@cdktf/provider-opentelekomcloud'

new cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CfwAclRuleV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwAclRuleV1.CfwAclRuleV1Timeouts">CfwAclRuleV1Timeouts</a>

---



