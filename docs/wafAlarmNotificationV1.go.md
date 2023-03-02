# `wafAlarmNotificationV1` Submodule <a name="`wafAlarmNotificationV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafAlarmNotificationV1 <a name="WafAlarmNotificationV1" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1 opentelekomcloud_waf_alarm_notification_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v5/wafalarmnotificationv1"

wafalarmnotificationv1.NewWafAlarmNotificationV1(scope Construct, id *string, config WafAlarmNotificationV1Config) WafAlarmNotificationV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config">WafAlarmNotificationV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config">WafAlarmNotificationV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.resetLocale">ResetLocale</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.resetId"></a>

```go
func ResetId()
```

##### `ResetLocale` <a name="ResetLocale" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.resetLocale"></a>

```go
func ResetLocale()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v5/wafalarmnotificationv1"

wafalarmnotificationv1.WafAlarmNotificationV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v5/wafalarmnotificationv1"

wafalarmnotificationv1.WafAlarmNotificationV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v5/wafalarmnotificationv1"

wafalarmnotificationv1.WafAlarmNotificationV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.localeInput">LocaleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.sendFrequencyInput">SendFrequencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.threatInput">ThreatInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.timesInput">TimesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.topicUrnInput">TopicUrnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.sendFrequency">SendFrequency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.threat">Threat</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.times">Times</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.topicUrn">TopicUrn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.localeInput"></a>

```go
func LocaleInput() *string
```

- *Type:* *string

---

##### `SendFrequencyInput`<sup>Optional</sup> <a name="SendFrequencyInput" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.sendFrequencyInput"></a>

```go
func SendFrequencyInput() *f64
```

- *Type:* *f64

---

##### `ThreatInput`<sup>Optional</sup> <a name="ThreatInput" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.threatInput"></a>

```go
func ThreatInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimesInput`<sup>Optional</sup> <a name="TimesInput" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.timesInput"></a>

```go
func TimesInput() *f64
```

- *Type:* *f64

---

##### `TopicUrnInput`<sup>Optional</sup> <a name="TopicUrnInput" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.topicUrnInput"></a>

```go
func TopicUrnInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `SendFrequency`<sup>Required</sup> <a name="SendFrequency" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.sendFrequency"></a>

```go
func SendFrequency() *f64
```

- *Type:* *f64

---

##### `Threat`<sup>Required</sup> <a name="Threat" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.threat"></a>

```go
func Threat() *[]*string
```

- *Type:* *[]*string

---

##### `Times`<sup>Required</sup> <a name="Times" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.times"></a>

```go
func Times() *f64
```

- *Type:* *f64

---

##### `TopicUrn`<sup>Required</sup> <a name="TopicUrn" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.topicUrn"></a>

```go
func TopicUrn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WafAlarmNotificationV1Config <a name="WafAlarmNotificationV1Config" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v5/wafalarmnotificationv1"

&wafalarmnotificationv1.WafAlarmNotificationV1Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Enabled: interface{},
	SendFrequency: *f64,
	Threat: *[]*string,
	Times: *f64,
	TopicUrn: *string,
	Id: *string,
	Locale: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1#enabled WafAlarmNotificationV1#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.sendFrequency">SendFrequency</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1#send_frequency WafAlarmNotificationV1#send_frequency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.threat">Threat</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1#threat WafAlarmNotificationV1#threat}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.times">Times</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1#times WafAlarmNotificationV1#times}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.topicUrn">TopicUrn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1#topic_urn WafAlarmNotificationV1#topic_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1#id WafAlarmNotificationV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.locale">Locale</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1#locale WafAlarmNotificationV1#locale}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1#enabled WafAlarmNotificationV1#enabled}.

---

##### `SendFrequency`<sup>Required</sup> <a name="SendFrequency" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.sendFrequency"></a>

```go
SendFrequency *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1#send_frequency WafAlarmNotificationV1#send_frequency}.

---

##### `Threat`<sup>Required</sup> <a name="Threat" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.threat"></a>

```go
Threat *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1#threat WafAlarmNotificationV1#threat}.

---

##### `Times`<sup>Required</sup> <a name="Times" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.times"></a>

```go
Times *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1#times WafAlarmNotificationV1#times}.

---

##### `TopicUrn`<sup>Required</sup> <a name="TopicUrn" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.topicUrn"></a>

```go
TopicUrn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1#topic_urn WafAlarmNotificationV1#topic_urn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1#id WafAlarmNotificationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Locale`<sup>Optional</sup> <a name="Locale" id="@cdktf/provider-opentelekomcloud.wafAlarmNotificationV1.WafAlarmNotificationV1Config.property.locale"></a>

```go
Locale *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_alarm_notification_v1#locale WafAlarmNotificationV1#locale}.

---



