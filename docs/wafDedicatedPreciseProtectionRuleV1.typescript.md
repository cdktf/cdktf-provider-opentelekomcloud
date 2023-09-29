# `opentelekomcloud_waf_dedicated_precise_protection_rule_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_waf_dedicated_precise_protection_rule_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1).

# `wafDedicatedPreciseProtectionRuleV1` Submodule <a name="`wafDedicatedPreciseProtectionRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDedicatedPreciseProtectionRuleV1 <a name="WafDedicatedPreciseProtectionRuleV1" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1 opentelekomcloud_waf_dedicated_precise_protection_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer"></a>

```typescript
import { wafDedicatedPreciseProtectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1(scope: Construct, id: string, config: WafDedicatedPreciseProtectionRuleV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config">WafDedicatedPreciseProtectionRuleV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config">WafDedicatedPreciseProtectionRuleV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetStart">resetStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetTerminal">resetTerminal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAction` <a name="putAction" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putAction"></a>

```typescript
public putAction(value: IResolvable | WafDedicatedPreciseProtectionRuleV1Action[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a>[]

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putConditions"></a>

```typescript
public putConditions(value: IResolvable | WafDedicatedPreciseProtectionRuleV1Conditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putTimeouts"></a>

```typescript
public putTimeouts(value: WafDedicatedPreciseProtectionRuleV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a>

---

##### `resetConditions` <a name="resetConditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStart` <a name="resetStart" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetStart"></a>

```typescript
public resetStart(): void
```

##### `resetTerminal` <a name="resetTerminal" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetTerminal"></a>

```typescript
public resetTerminal(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isConstruct"></a>

```typescript
import { wafDedicatedPreciseProtectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformElement"></a>

```typescript
import { wafDedicatedPreciseProtectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformResource"></a>

```typescript
import { wafDedicatedPreciseProtectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.action">action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList">WafDedicatedPreciseProtectionRuleV1ActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList">WafDedicatedPreciseProtectionRuleV1ConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.status">status</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference">WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.actionInput">actionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.conditionsInput">conditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.startInput">startInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terminalInput">terminalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.timeInput">timeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.start">start</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terminal">terminal</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.time">time</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.action"></a>

```typescript
public readonly action: WafDedicatedPreciseProtectionRuleV1ActionList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList">WafDedicatedPreciseProtectionRuleV1ActionList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.conditions"></a>

```typescript
public readonly conditions: WafDedicatedPreciseProtectionRuleV1ConditionsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList">WafDedicatedPreciseProtectionRuleV1ConditionsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.status"></a>

```typescript
public readonly status: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.timeouts"></a>

```typescript
public readonly timeouts: WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference">WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | WafDedicatedPreciseProtectionRuleV1Action[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a>[]

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | WafDedicatedPreciseProtectionRuleV1Conditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.startInput"></a>

```typescript
public readonly startInput: number;
```

- *Type:* number

---

##### `terminalInput`<sup>Optional</sup> <a name="terminalInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terminalInput"></a>

```typescript
public readonly terminalInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.timeInput"></a>

```typescript
public readonly timeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WafDedicatedPreciseProtectionRuleV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

---

##### `terminal`<sup>Required</sup> <a name="terminal" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.terminal"></a>

```typescript
public readonly terminal: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.time"></a>

```typescript
public readonly time: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafDedicatedPreciseProtectionRuleV1Action <a name="WafDedicatedPreciseProtectionRuleV1Action" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action.Initializer"></a>

```typescript
import { wafDedicatedPreciseProtectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

const wafDedicatedPreciseProtectionRuleV1Action: wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#category WafDedicatedPreciseProtectionRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action.property.followedActionId">followedActionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#followed_action_id WafDedicatedPreciseProtectionRuleV1#followed_action_id}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#category WafDedicatedPreciseProtectionRuleV1#category}.

---

##### `followedActionId`<sup>Optional</sup> <a name="followedActionId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action.property.followedActionId"></a>

```typescript
public readonly followedActionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#followed_action_id WafDedicatedPreciseProtectionRuleV1#followed_action_id}.

---

### WafDedicatedPreciseProtectionRuleV1Conditions <a name="WafDedicatedPreciseProtectionRuleV1Conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.Initializer"></a>

```typescript
import { wafDedicatedPreciseProtectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

const wafDedicatedPreciseProtectionRuleV1Conditions: wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#category WafDedicatedPreciseProtectionRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.contents">contents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#contents WafDedicatedPreciseProtectionRuleV1#contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.index">index</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#index WafDedicatedPreciseProtectionRuleV1#index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.logicOperation">logicOperation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#logic_operation WafDedicatedPreciseProtectionRuleV1#logic_operation}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.valueListId">valueListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#value_list_id WafDedicatedPreciseProtectionRuleV1#value_list_id}. |

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#category WafDedicatedPreciseProtectionRuleV1#category}.

---

##### `contents`<sup>Optional</sup> <a name="contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.contents"></a>

```typescript
public readonly contents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#contents WafDedicatedPreciseProtectionRuleV1#contents}.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#index WafDedicatedPreciseProtectionRuleV1#index}.

---

##### `logicOperation`<sup>Optional</sup> <a name="logicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.logicOperation"></a>

```typescript
public readonly logicOperation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#logic_operation WafDedicatedPreciseProtectionRuleV1#logic_operation}.

---

##### `valueListId`<sup>Optional</sup> <a name="valueListId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions.property.valueListId"></a>

```typescript
public readonly valueListId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#value_list_id WafDedicatedPreciseProtectionRuleV1#value_list_id}.

---

### WafDedicatedPreciseProtectionRuleV1Config <a name="WafDedicatedPreciseProtectionRuleV1Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.Initializer"></a>

```typescript
import { wafDedicatedPreciseProtectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

const wafDedicatedPreciseProtectionRuleV1Config: wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.action">action</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a>[]</code> | action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.policyId">policyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#policy_id WafDedicatedPreciseProtectionRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#priority WafDedicatedPreciseProtectionRuleV1#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.time">time</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#time WafDedicatedPreciseProtectionRuleV1#time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#description WafDedicatedPreciseProtectionRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#id WafDedicatedPreciseProtectionRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.start">start</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#start WafDedicatedPreciseProtectionRuleV1#start}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.terminal">terminal</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#terminal WafDedicatedPreciseProtectionRuleV1#terminal}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.action"></a>

```typescript
public readonly action: IResolvable | WafDedicatedPreciseProtectionRuleV1Action[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a>[]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#action WafDedicatedPreciseProtectionRuleV1#action}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#policy_id WafDedicatedPreciseProtectionRuleV1#policy_id}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#priority WafDedicatedPreciseProtectionRuleV1#priority}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.time"></a>

```typescript
public readonly time: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#time WafDedicatedPreciseProtectionRuleV1#time}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | WafDedicatedPreciseProtectionRuleV1Conditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#conditions WafDedicatedPreciseProtectionRuleV1#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#description WafDedicatedPreciseProtectionRuleV1#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#id WafDedicatedPreciseProtectionRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#start WafDedicatedPreciseProtectionRuleV1#start}.

---

##### `terminal`<sup>Optional</sup> <a name="terminal" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.terminal"></a>

```typescript
public readonly terminal: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#terminal WafDedicatedPreciseProtectionRuleV1#terminal}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: WafDedicatedPreciseProtectionRuleV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#timeouts WafDedicatedPreciseProtectionRuleV1#timeouts}

---

### WafDedicatedPreciseProtectionRuleV1Timeouts <a name="WafDedicatedPreciseProtectionRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts.Initializer"></a>

```typescript
import { wafDedicatedPreciseProtectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

const wafDedicatedPreciseProtectionRuleV1Timeouts: wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#create WafDedicatedPreciseProtectionRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#delete WafDedicatedPreciseProtectionRuleV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#create WafDedicatedPreciseProtectionRuleV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/waf_dedicated_precise_protection_rule_v1#delete WafDedicatedPreciseProtectionRuleV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDedicatedPreciseProtectionRuleV1ActionList <a name="WafDedicatedPreciseProtectionRuleV1ActionList" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer"></a>

```typescript
import { wafDedicatedPreciseProtectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.get"></a>

```typescript
public get(index: number): WafDedicatedPreciseProtectionRuleV1ActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafDedicatedPreciseProtectionRuleV1Action[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a>[]

---


### WafDedicatedPreciseProtectionRuleV1ActionOutputReference <a name="WafDedicatedPreciseProtectionRuleV1ActionOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer"></a>

```typescript
import { wafDedicatedPreciseProtectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.resetFollowedActionId">resetFollowedActionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFollowedActionId` <a name="resetFollowedActionId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.resetFollowedActionId"></a>

```typescript
public resetFollowedActionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.followedActionIdInput">followedActionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.followedActionId">followedActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `followedActionIdInput`<sup>Optional</sup> <a name="followedActionIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.followedActionIdInput"></a>

```typescript
public readonly followedActionIdInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `followedActionId`<sup>Required</sup> <a name="followedActionId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.followedActionId"></a>

```typescript
public readonly followedActionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafDedicatedPreciseProtectionRuleV1Action;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Action">WafDedicatedPreciseProtectionRuleV1Action</a>

---


### WafDedicatedPreciseProtectionRuleV1ConditionsList <a name="WafDedicatedPreciseProtectionRuleV1ConditionsList" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer"></a>

```typescript
import { wafDedicatedPreciseProtectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.get"></a>

```typescript
public get(index: number): WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafDedicatedPreciseProtectionRuleV1Conditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a>[]

---


### WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference <a name="WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer"></a>

```typescript
import { wafDedicatedPreciseProtectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetContents">resetContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetIndex">resetIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetLogicOperation">resetLogicOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetValueListId">resetValueListId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCategory` <a name="resetCategory" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetContents` <a name="resetContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetContents"></a>

```typescript
public resetContents(): void
```

##### `resetIndex` <a name="resetIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetIndex"></a>

```typescript
public resetIndex(): void
```

##### `resetLogicOperation` <a name="resetLogicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetLogicOperation"></a>

```typescript
public resetLogicOperation(): void
```

##### `resetValueListId` <a name="resetValueListId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.resetValueListId"></a>

```typescript
public resetValueListId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.contentsInput">contentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.indexInput">indexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.logicOperationInput">logicOperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.valueListIdInput">valueListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.contents">contents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.index">index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.logicOperation">logicOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.valueListId">valueListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `contentsInput`<sup>Optional</sup> <a name="contentsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.contentsInput"></a>

```typescript
public readonly contentsInput: string[];
```

- *Type:* string[]

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.indexInput"></a>

```typescript
public readonly indexInput: string;
```

- *Type:* string

---

##### `logicOperationInput`<sup>Optional</sup> <a name="logicOperationInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.logicOperationInput"></a>

```typescript
public readonly logicOperationInput: string;
```

- *Type:* string

---

##### `valueListIdInput`<sup>Optional</sup> <a name="valueListIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.valueListIdInput"></a>

```typescript
public readonly valueListIdInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.contents"></a>

```typescript
public readonly contents: string[];
```

- *Type:* string[]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

---

##### `logicOperation`<sup>Required</sup> <a name="logicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.logicOperation"></a>

```typescript
public readonly logicOperation: string;
```

- *Type:* string

---

##### `valueListId`<sup>Required</sup> <a name="valueListId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.valueListId"></a>

```typescript
public readonly valueListId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafDedicatedPreciseProtectionRuleV1Conditions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Conditions">WafDedicatedPreciseProtectionRuleV1Conditions</a>

---


### WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference <a name="WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { wafDedicatedPreciseProtectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafDedicatedPreciseProtectionRuleV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPreciseProtectionRuleV1.WafDedicatedPreciseProtectionRuleV1Timeouts">WafDedicatedPreciseProtectionRuleV1Timeouts</a>

---


