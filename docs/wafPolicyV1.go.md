# `wafPolicyV1` Submodule <a name="`wafPolicyV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafPolicyV1 <a name="WafPolicyV1" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1 opentelekomcloud_waf_policy_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/wafpolicyv1"

wafpolicyv1.NewWafPolicyV1(scope Construct, id *string, config WafPolicyV1Config) WafPolicyV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config">WafPolicyV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config">WafPolicyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetFullDetection">ResetFullDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putAction"></a>

```go
func PutAction(value WafPolicyV1Action)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a>

---

##### `PutOptions` <a name="PutOptions" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions"></a>

```go
func PutOptions(value WafPolicyV1Options)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putTimeouts"></a>

```go
func PutTimeouts(value WafPolicyV1Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetAction"></a>

```go
func ResetAction()
```

##### `ResetFullDetection` <a name="ResetFullDetection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetFullDetection"></a>

```go
func ResetFullDetection()
```

##### `ResetHosts` <a name="ResetHosts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetHosts"></a>

```go
func ResetHosts()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetId"></a>

```go
func ResetId()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetLevel"></a>

```go
func ResetLevel()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/wafpolicyv1"

wafpolicyv1.WafPolicyV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/wafpolicyv1"

wafpolicyv1.WafPolicyV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/wafpolicyv1"

wafpolicyv1.WafPolicyV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.action">Action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference">WafPolicyV1ActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.options">Options</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference">WafPolicyV1OptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference">WafPolicyV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fullDetectionInput">FullDetectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.hostsInput">HostsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.levelInput">LevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fullDetection">FullDetection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.hosts">Hosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.level">Level</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.action"></a>

```go
func Action() WafPolicyV1ActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference">WafPolicyV1ActionOutputReference</a>

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.options"></a>

```go
func Options() WafPolicyV1OptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference">WafPolicyV1OptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.timeouts"></a>

```go
func Timeouts() WafPolicyV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference">WafPolicyV1TimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.actionInput"></a>

```go
func ActionInput() WafPolicyV1Action
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a>

---

##### `FullDetectionInput`<sup>Optional</sup> <a name="FullDetectionInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fullDetectionInput"></a>

```go
func FullDetectionInput() interface{}
```

- *Type:* interface{}

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.hostsInput"></a>

```go
func HostsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.levelInput"></a>

```go
func LevelInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.optionsInput"></a>

```go
func OptionsInput() WafPolicyV1Options
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `FullDetection`<sup>Required</sup> <a name="FullDetection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fullDetection"></a>

```go
func FullDetection() interface{}
```

- *Type:* interface{}

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.hosts"></a>

```go
func Hosts() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.level"></a>

```go
func Level() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WafPolicyV1Action <a name="WafPolicyV1Action" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/wafpolicyv1"

&wafpolicyv1.WafPolicyV1Action {
	Category: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action.property.category">Category</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#category WafPolicyV1#category}. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action.property.category"></a>

```go
Category *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#category WafPolicyV1#category}.

---

### WafPolicyV1Config <a name="WafPolicyV1Config" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/wafpolicyv1"

&wafpolicyv1.WafPolicyV1Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Action: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.wafPolicyV1.WafPolicyV1Action,
	FullDetection: interface{},
	Hosts: *[]*string,
	Id: *string,
	Level: *f64,
	Options: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.wafPolicyV1.WafPolicyV1Options,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#name WafPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.action">Action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a></code> | action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.fullDetection">FullDetection</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#full_detection WafPolicyV1#full_detection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.hosts">Hosts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#hosts WafPolicyV1#hosts}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#id WafPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.level">Level</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#level WafPolicyV1#level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.options">Options</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a></code> | options block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#name WafPolicyV1#name}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.action"></a>

```go
Action WafPolicyV1Action
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#action WafPolicyV1#action}

---

##### `FullDetection`<sup>Optional</sup> <a name="FullDetection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.fullDetection"></a>

```go
FullDetection interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#full_detection WafPolicyV1#full_detection}.

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.hosts"></a>

```go
Hosts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#hosts WafPolicyV1#hosts}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#id WafPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.level"></a>

```go
Level *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#level WafPolicyV1#level}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.options"></a>

```go
Options WafPolicyV1Options
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#options WafPolicyV1#options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.timeouts"></a>

```go
Timeouts WafPolicyV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#timeouts WafPolicyV1#timeouts}

---

### WafPolicyV1Options <a name="WafPolicyV1Options" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/wafpolicyv1"

&wafpolicyv1.WafPolicyV1Options {
	Antitamper: interface{},
	Cc: interface{},
	Common: interface{},
	Crawler: interface{},
	CrawlerEngine: interface{},
	CrawlerOther: interface{},
	CrawlerScanner: interface{},
	CrawlerScript: interface{},
	Custom: interface{},
	Ignore: interface{},
	Privacy: interface{},
	Webattack: interface{},
	Webshell: interface{},
	Whiteblackip: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.antitamper">Antitamper</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#antitamper WafPolicyV1#antitamper}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.cc">Cc</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#cc WafPolicyV1#cc}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.common">Common</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#common WafPolicyV1#common}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawler">Crawler</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#crawler WafPolicyV1#crawler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerEngine">CrawlerEngine</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#crawler_engine WafPolicyV1#crawler_engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerOther">CrawlerOther</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#crawler_other WafPolicyV1#crawler_other}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerScanner">CrawlerScanner</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#crawler_scanner WafPolicyV1#crawler_scanner}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerScript">CrawlerScript</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#crawler_script WafPolicyV1#crawler_script}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.custom">Custom</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#custom WafPolicyV1#custom}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.ignore">Ignore</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#ignore WafPolicyV1#ignore}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.privacy">Privacy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#privacy WafPolicyV1#privacy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.webattack">Webattack</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#webattack WafPolicyV1#webattack}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.webshell">Webshell</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#webshell WafPolicyV1#webshell}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.whiteblackip">Whiteblackip</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#whiteblackip WafPolicyV1#whiteblackip}. |

---

##### `Antitamper`<sup>Optional</sup> <a name="Antitamper" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.antitamper"></a>

```go
Antitamper interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#antitamper WafPolicyV1#antitamper}.

---

##### `Cc`<sup>Optional</sup> <a name="Cc" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.cc"></a>

```go
Cc interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#cc WafPolicyV1#cc}.

---

##### `Common`<sup>Optional</sup> <a name="Common" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.common"></a>

```go
Common interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#common WafPolicyV1#common}.

---

##### `Crawler`<sup>Optional</sup> <a name="Crawler" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawler"></a>

```go
Crawler interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#crawler WafPolicyV1#crawler}.

---

##### `CrawlerEngine`<sup>Optional</sup> <a name="CrawlerEngine" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerEngine"></a>

```go
CrawlerEngine interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#crawler_engine WafPolicyV1#crawler_engine}.

---

##### `CrawlerOther`<sup>Optional</sup> <a name="CrawlerOther" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerOther"></a>

```go
CrawlerOther interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#crawler_other WafPolicyV1#crawler_other}.

---

##### `CrawlerScanner`<sup>Optional</sup> <a name="CrawlerScanner" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerScanner"></a>

```go
CrawlerScanner interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#crawler_scanner WafPolicyV1#crawler_scanner}.

---

##### `CrawlerScript`<sup>Optional</sup> <a name="CrawlerScript" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerScript"></a>

```go
CrawlerScript interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#crawler_script WafPolicyV1#crawler_script}.

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.custom"></a>

```go
Custom interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#custom WafPolicyV1#custom}.

---

##### `Ignore`<sup>Optional</sup> <a name="Ignore" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.ignore"></a>

```go
Ignore interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#ignore WafPolicyV1#ignore}.

---

##### `Privacy`<sup>Optional</sup> <a name="Privacy" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.privacy"></a>

```go
Privacy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#privacy WafPolicyV1#privacy}.

---

##### `Webattack`<sup>Optional</sup> <a name="Webattack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.webattack"></a>

```go
Webattack interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#webattack WafPolicyV1#webattack}.

---

##### `Webshell`<sup>Optional</sup> <a name="Webshell" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.webshell"></a>

```go
Webshell interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#webshell WafPolicyV1#webshell}.

---

##### `Whiteblackip`<sup>Optional</sup> <a name="Whiteblackip" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.whiteblackip"></a>

```go
Whiteblackip interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#whiteblackip WafPolicyV1#whiteblackip}.

---

### WafPolicyV1Timeouts <a name="WafPolicyV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/wafpolicyv1"

&wafpolicyv1.WafPolicyV1Timeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#create WafPolicyV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#delete WafPolicyV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#create WafPolicyV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1#delete WafPolicyV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafPolicyV1ActionOutputReference <a name="WafPolicyV1ActionOutputReference" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/wafpolicyv1"

wafpolicyv1.NewWafPolicyV1ActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafPolicyV1ActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.internalValue"></a>

```go
func InternalValue() WafPolicyV1Action
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a>

---


### WafPolicyV1OptionsOutputReference <a name="WafPolicyV1OptionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/wafpolicyv1"

wafpolicyv1.NewWafPolicyV1OptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafPolicyV1OptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetAntitamper">ResetAntitamper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCc">ResetCc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCommon">ResetCommon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawler">ResetCrawler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerEngine">ResetCrawlerEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerOther">ResetCrawlerOther</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerScanner">ResetCrawlerScanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerScript">ResetCrawlerScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetIgnore">ResetIgnore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetPrivacy">ResetPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWebattack">ResetWebattack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWebshell">ResetWebshell</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWhiteblackip">ResetWhiteblackip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAntitamper` <a name="ResetAntitamper" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetAntitamper"></a>

```go
func ResetAntitamper()
```

##### `ResetCc` <a name="ResetCc" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCc"></a>

```go
func ResetCc()
```

##### `ResetCommon` <a name="ResetCommon" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCommon"></a>

```go
func ResetCommon()
```

##### `ResetCrawler` <a name="ResetCrawler" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawler"></a>

```go
func ResetCrawler()
```

##### `ResetCrawlerEngine` <a name="ResetCrawlerEngine" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerEngine"></a>

```go
func ResetCrawlerEngine()
```

##### `ResetCrawlerOther` <a name="ResetCrawlerOther" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerOther"></a>

```go
func ResetCrawlerOther()
```

##### `ResetCrawlerScanner` <a name="ResetCrawlerScanner" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerScanner"></a>

```go
func ResetCrawlerScanner()
```

##### `ResetCrawlerScript` <a name="ResetCrawlerScript" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerScript"></a>

```go
func ResetCrawlerScript()
```

##### `ResetCustom` <a name="ResetCustom" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCustom"></a>

```go
func ResetCustom()
```

##### `ResetIgnore` <a name="ResetIgnore" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetIgnore"></a>

```go
func ResetIgnore()
```

##### `ResetPrivacy` <a name="ResetPrivacy" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetPrivacy"></a>

```go
func ResetPrivacy()
```

##### `ResetWebattack` <a name="ResetWebattack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWebattack"></a>

```go
func ResetWebattack()
```

##### `ResetWebshell` <a name="ResetWebshell" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWebshell"></a>

```go
func ResetWebshell()
```

##### `ResetWhiteblackip` <a name="ResetWhiteblackip" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWhiteblackip"></a>

```go
func ResetWhiteblackip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.antitamperInput">AntitamperInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ccInput">CcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.commonInput">CommonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerEngineInput">CrawlerEngineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerInput">CrawlerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerOtherInput">CrawlerOtherInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScannerInput">CrawlerScannerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScriptInput">CrawlerScriptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.customInput">CustomInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ignoreInput">IgnoreInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.privacyInput">PrivacyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webattackInput">WebattackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webshellInput">WebshellInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.whiteblackipInput">WhiteblackipInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.antitamper">Antitamper</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.cc">Cc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.common">Common</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawler">Crawler</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerEngine">CrawlerEngine</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerOther">CrawlerOther</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScanner">CrawlerScanner</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScript">CrawlerScript</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.custom">Custom</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ignore">Ignore</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.privacy">Privacy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webattack">Webattack</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webshell">Webshell</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.whiteblackip">Whiteblackip</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AntitamperInput`<sup>Optional</sup> <a name="AntitamperInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.antitamperInput"></a>

```go
func AntitamperInput() interface{}
```

- *Type:* interface{}

---

##### `CcInput`<sup>Optional</sup> <a name="CcInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ccInput"></a>

```go
func CcInput() interface{}
```

- *Type:* interface{}

---

##### `CommonInput`<sup>Optional</sup> <a name="CommonInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.commonInput"></a>

```go
func CommonInput() interface{}
```

- *Type:* interface{}

---

##### `CrawlerEngineInput`<sup>Optional</sup> <a name="CrawlerEngineInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerEngineInput"></a>

```go
func CrawlerEngineInput() interface{}
```

- *Type:* interface{}

---

##### `CrawlerInput`<sup>Optional</sup> <a name="CrawlerInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerInput"></a>

```go
func CrawlerInput() interface{}
```

- *Type:* interface{}

---

##### `CrawlerOtherInput`<sup>Optional</sup> <a name="CrawlerOtherInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerOtherInput"></a>

```go
func CrawlerOtherInput() interface{}
```

- *Type:* interface{}

---

##### `CrawlerScannerInput`<sup>Optional</sup> <a name="CrawlerScannerInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScannerInput"></a>

```go
func CrawlerScannerInput() interface{}
```

- *Type:* interface{}

---

##### `CrawlerScriptInput`<sup>Optional</sup> <a name="CrawlerScriptInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScriptInput"></a>

```go
func CrawlerScriptInput() interface{}
```

- *Type:* interface{}

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.customInput"></a>

```go
func CustomInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreInput`<sup>Optional</sup> <a name="IgnoreInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ignoreInput"></a>

```go
func IgnoreInput() interface{}
```

- *Type:* interface{}

---

##### `PrivacyInput`<sup>Optional</sup> <a name="PrivacyInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.privacyInput"></a>

```go
func PrivacyInput() interface{}
```

- *Type:* interface{}

---

##### `WebattackInput`<sup>Optional</sup> <a name="WebattackInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webattackInput"></a>

```go
func WebattackInput() interface{}
```

- *Type:* interface{}

---

##### `WebshellInput`<sup>Optional</sup> <a name="WebshellInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webshellInput"></a>

```go
func WebshellInput() interface{}
```

- *Type:* interface{}

---

##### `WhiteblackipInput`<sup>Optional</sup> <a name="WhiteblackipInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.whiteblackipInput"></a>

```go
func WhiteblackipInput() interface{}
```

- *Type:* interface{}

---

##### `Antitamper`<sup>Required</sup> <a name="Antitamper" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.antitamper"></a>

```go
func Antitamper() interface{}
```

- *Type:* interface{}

---

##### `Cc`<sup>Required</sup> <a name="Cc" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.cc"></a>

```go
func Cc() interface{}
```

- *Type:* interface{}

---

##### `Common`<sup>Required</sup> <a name="Common" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.common"></a>

```go
func Common() interface{}
```

- *Type:* interface{}

---

##### `Crawler`<sup>Required</sup> <a name="Crawler" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawler"></a>

```go
func Crawler() interface{}
```

- *Type:* interface{}

---

##### `CrawlerEngine`<sup>Required</sup> <a name="CrawlerEngine" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerEngine"></a>

```go
func CrawlerEngine() interface{}
```

- *Type:* interface{}

---

##### `CrawlerOther`<sup>Required</sup> <a name="CrawlerOther" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerOther"></a>

```go
func CrawlerOther() interface{}
```

- *Type:* interface{}

---

##### `CrawlerScanner`<sup>Required</sup> <a name="CrawlerScanner" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScanner"></a>

```go
func CrawlerScanner() interface{}
```

- *Type:* interface{}

---

##### `CrawlerScript`<sup>Required</sup> <a name="CrawlerScript" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScript"></a>

```go
func CrawlerScript() interface{}
```

- *Type:* interface{}

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.custom"></a>

```go
func Custom() interface{}
```

- *Type:* interface{}

---

##### `Ignore`<sup>Required</sup> <a name="Ignore" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ignore"></a>

```go
func Ignore() interface{}
```

- *Type:* interface{}

---

##### `Privacy`<sup>Required</sup> <a name="Privacy" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.privacy"></a>

```go
func Privacy() interface{}
```

- *Type:* interface{}

---

##### `Webattack`<sup>Required</sup> <a name="Webattack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webattack"></a>

```go
func Webattack() interface{}
```

- *Type:* interface{}

---

##### `Webshell`<sup>Required</sup> <a name="Webshell" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webshell"></a>

```go
func Webshell() interface{}
```

- *Type:* interface{}

---

##### `Whiteblackip`<sup>Required</sup> <a name="Whiteblackip" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.whiteblackip"></a>

```go
func Whiteblackip() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() WafPolicyV1Options
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a>

---


### WafPolicyV1TimeoutsOutputReference <a name="WafPolicyV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/wafpolicyv1"

wafpolicyv1.NewWafPolicyV1TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafPolicyV1TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



