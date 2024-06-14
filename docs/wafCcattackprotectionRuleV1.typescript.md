# `wafCcattackprotectionRuleV1` Submodule <a name="`wafCcattackprotectionRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafCcattackprotectionRuleV1 <a name="WafCcattackprotectionRuleV1" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1 opentelekomcloud_waf_ccattackprotection_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer"></a>

```typescript
import { wafCcattackprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1(scope: Construct, id: string, config: WafCcattackprotectionRuleV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config">WafCcattackprotectionRuleV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config">WafCcattackprotectionRuleV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetBlockContent">resetBlockContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetBlockContentType">resetBlockContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetLockTime">resetLockTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTagCategory">resetTagCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTagContents">resetTagContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTagIndex">resetTagIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.putTimeouts"></a>

```typescript
public putTimeouts(value: WafCcattackprotectionRuleV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts">WafCcattackprotectionRuleV1Timeouts</a>

---

##### `resetBlockContent` <a name="resetBlockContent" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetBlockContent"></a>

```typescript
public resetBlockContent(): void
```

##### `resetBlockContentType` <a name="resetBlockContentType" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetBlockContentType"></a>

```typescript
public resetBlockContentType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLockTime` <a name="resetLockTime" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetLockTime"></a>

```typescript
public resetLockTime(): void
```

##### `resetTagCategory` <a name="resetTagCategory" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTagCategory"></a>

```typescript
public resetTagCategory(): void
```

##### `resetTagContents` <a name="resetTagContents" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTagContents"></a>

```typescript
public resetTagContents(): void
```

##### `resetTagIndex` <a name="resetTagIndex" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTagIndex"></a>

```typescript
public resetTagIndex(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WafCcattackprotectionRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isConstruct"></a>

```typescript
import { wafCcattackprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformElement"></a>

```typescript
import { wafCcattackprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformResource"></a>

```typescript
import { wafCcattackprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport"></a>

```typescript
import { wafCcattackprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WafCcattackprotectionRuleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WafCcattackprotectionRuleV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WafCcattackprotectionRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WafCcattackprotectionRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference">WafCcattackprotectionRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.actionCategoryInput">actionCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContentInput">blockContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContentTypeInput">blockContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitNumInput">limitNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitPeriodInput">limitPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.lockTimeInput">lockTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagCategoryInput">tagCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagContentsInput">tagContentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagIndexInput">tagIndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagTypeInput">tagTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts">WafCcattackprotectionRuleV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.actionCategory">actionCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContent">blockContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContentType">blockContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitNum">limitNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitPeriod">limitPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.lockTime">lockTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagCategory">tagCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagContents">tagContents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagIndex">tagIndex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagType">tagType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.timeouts"></a>

```typescript
public readonly timeouts: WafCcattackprotectionRuleV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference">WafCcattackprotectionRuleV1TimeoutsOutputReference</a>

---

##### `actionCategoryInput`<sup>Optional</sup> <a name="actionCategoryInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.actionCategoryInput"></a>

```typescript
public readonly actionCategoryInput: string;
```

- *Type:* string

---

##### `blockContentInput`<sup>Optional</sup> <a name="blockContentInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContentInput"></a>

```typescript
public readonly blockContentInput: string;
```

- *Type:* string

---

##### `blockContentTypeInput`<sup>Optional</sup> <a name="blockContentTypeInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContentTypeInput"></a>

```typescript
public readonly blockContentTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitNumInput`<sup>Optional</sup> <a name="limitNumInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitNumInput"></a>

```typescript
public readonly limitNumInput: number;
```

- *Type:* number

---

##### `limitPeriodInput`<sup>Optional</sup> <a name="limitPeriodInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitPeriodInput"></a>

```typescript
public readonly limitPeriodInput: number;
```

- *Type:* number

---

##### `lockTimeInput`<sup>Optional</sup> <a name="lockTimeInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.lockTimeInput"></a>

```typescript
public readonly lockTimeInput: number;
```

- *Type:* number

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `tagCategoryInput`<sup>Optional</sup> <a name="tagCategoryInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagCategoryInput"></a>

```typescript
public readonly tagCategoryInput: string;
```

- *Type:* string

---

##### `tagContentsInput`<sup>Optional</sup> <a name="tagContentsInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagContentsInput"></a>

```typescript
public readonly tagContentsInput: string[];
```

- *Type:* string[]

---

##### `tagIndexInput`<sup>Optional</sup> <a name="tagIndexInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagIndexInput"></a>

```typescript
public readonly tagIndexInput: string;
```

- *Type:* string

---

##### `tagTypeInput`<sup>Optional</sup> <a name="tagTypeInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagTypeInput"></a>

```typescript
public readonly tagTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WafCcattackprotectionRuleV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts">WafCcattackprotectionRuleV1Timeouts</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `actionCategory`<sup>Required</sup> <a name="actionCategory" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.actionCategory"></a>

```typescript
public readonly actionCategory: string;
```

- *Type:* string

---

##### `blockContent`<sup>Required</sup> <a name="blockContent" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContent"></a>

```typescript
public readonly blockContent: string;
```

- *Type:* string

---

##### `blockContentType`<sup>Required</sup> <a name="blockContentType" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.blockContentType"></a>

```typescript
public readonly blockContentType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limitNum`<sup>Required</sup> <a name="limitNum" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitNum"></a>

```typescript
public readonly limitNum: number;
```

- *Type:* number

---

##### `limitPeriod`<sup>Required</sup> <a name="limitPeriod" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.limitPeriod"></a>

```typescript
public readonly limitPeriod: number;
```

- *Type:* number

---

##### `lockTime`<sup>Required</sup> <a name="lockTime" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.lockTime"></a>

```typescript
public readonly lockTime: number;
```

- *Type:* number

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `tagCategory`<sup>Required</sup> <a name="tagCategory" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagCategory"></a>

```typescript
public readonly tagCategory: string;
```

- *Type:* string

---

##### `tagContents`<sup>Required</sup> <a name="tagContents" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagContents"></a>

```typescript
public readonly tagContents: string[];
```

- *Type:* string[]

---

##### `tagIndex`<sup>Required</sup> <a name="tagIndex" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagIndex"></a>

```typescript
public readonly tagIndex: string;
```

- *Type:* string

---

##### `tagType`<sup>Required</sup> <a name="tagType" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tagType"></a>

```typescript
public readonly tagType: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafCcattackprotectionRuleV1Config <a name="WafCcattackprotectionRuleV1Config" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.Initializer"></a>

```typescript
import { wafCcattackprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

const wafCcattackprotectionRuleV1Config: wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.actionCategory">actionCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#action_category WafCcattackprotectionRuleV1#action_category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.limitNum">limitNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#limit_num WafCcattackprotectionRuleV1#limit_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.limitPeriod">limitPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#limit_period WafCcattackprotectionRuleV1#limit_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.policyId">policyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#policy_id WafCcattackprotectionRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagType">tagType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#tag_type WafCcattackprotectionRuleV1#tag_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#url WafCcattackprotectionRuleV1#url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.blockContent">blockContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#block_content WafCcattackprotectionRuleV1#block_content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.blockContentType">blockContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#block_content_type WafCcattackprotectionRuleV1#block_content_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#id WafCcattackprotectionRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.lockTime">lockTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#lock_time WafCcattackprotectionRuleV1#lock_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagCategory">tagCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#tag_category WafCcattackprotectionRuleV1#tag_category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagContents">tagContents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#tag_contents WafCcattackprotectionRuleV1#tag_contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagIndex">tagIndex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#tag_index WafCcattackprotectionRuleV1#tag_index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts">WafCcattackprotectionRuleV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionCategory`<sup>Required</sup> <a name="actionCategory" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.actionCategory"></a>

```typescript
public readonly actionCategory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#action_category WafCcattackprotectionRuleV1#action_category}.

---

##### `limitNum`<sup>Required</sup> <a name="limitNum" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.limitNum"></a>

```typescript
public readonly limitNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#limit_num WafCcattackprotectionRuleV1#limit_num}.

---

##### `limitPeriod`<sup>Required</sup> <a name="limitPeriod" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.limitPeriod"></a>

```typescript
public readonly limitPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#limit_period WafCcattackprotectionRuleV1#limit_period}.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#policy_id WafCcattackprotectionRuleV1#policy_id}.

---

##### `tagType`<sup>Required</sup> <a name="tagType" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagType"></a>

```typescript
public readonly tagType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#tag_type WafCcattackprotectionRuleV1#tag_type}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#url WafCcattackprotectionRuleV1#url}.

---

##### `blockContent`<sup>Optional</sup> <a name="blockContent" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.blockContent"></a>

```typescript
public readonly blockContent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#block_content WafCcattackprotectionRuleV1#block_content}.

---

##### `blockContentType`<sup>Optional</sup> <a name="blockContentType" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.blockContentType"></a>

```typescript
public readonly blockContentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#block_content_type WafCcattackprotectionRuleV1#block_content_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#id WafCcattackprotectionRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lockTime`<sup>Optional</sup> <a name="lockTime" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.lockTime"></a>

```typescript
public readonly lockTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#lock_time WafCcattackprotectionRuleV1#lock_time}.

---

##### `tagCategory`<sup>Optional</sup> <a name="tagCategory" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagCategory"></a>

```typescript
public readonly tagCategory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#tag_category WafCcattackprotectionRuleV1#tag_category}.

---

##### `tagContents`<sup>Optional</sup> <a name="tagContents" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagContents"></a>

```typescript
public readonly tagContents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#tag_contents WafCcattackprotectionRuleV1#tag_contents}.

---

##### `tagIndex`<sup>Optional</sup> <a name="tagIndex" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.tagIndex"></a>

```typescript
public readonly tagIndex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#tag_index WafCcattackprotectionRuleV1#tag_index}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: WafCcattackprotectionRuleV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts">WafCcattackprotectionRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#timeouts WafCcattackprotectionRuleV1#timeouts}

---

### WafCcattackprotectionRuleV1Timeouts <a name="WafCcattackprotectionRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts.Initializer"></a>

```typescript
import { wafCcattackprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

const wafCcattackprotectionRuleV1Timeouts: wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#create WafCcattackprotectionRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#delete WafCcattackprotectionRuleV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#create WafCcattackprotectionRuleV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_ccattackprotection_rule_v1#delete WafCcattackprotectionRuleV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafCcattackprotectionRuleV1TimeoutsOutputReference <a name="WafCcattackprotectionRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { wafCcattackprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts">WafCcattackprotectionRuleV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafCcattackprotectionRuleV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafCcattackprotectionRuleV1.WafCcattackprotectionRuleV1Timeouts">WafCcattackprotectionRuleV1Timeouts</a>

---



